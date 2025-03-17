import { Suspense } from "react"
import { unstable_noStore as noStore } from "next/cache"

import prismadb from "@/lib/db"
import Categories from "@/components/Categories"
import ListingCard from "@/components/ListingCard"
import CardSkeleton from "@/components/CardSkeleton"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import NotFound from "@/components/Not-Found"

async function getData({
	searchParams,
	userId,
}: {
	userId: string | undefined
	searchParams?: {
		filter?: string
		country?: string
		guest?: string
		room?: string
		bathroom?: string
	}
}) {
	noStore()
	try {
		const data = await prismadb.home.findMany({
			where: {
				addedCategory: true,
				addedDescription: true,
				addedLocation: true,
				categoryName:
					searchParams?.filter ?? undefined,
				country:
					searchParams?.country ?? undefined,
				guests: searchParams?.room ?? undefined,
				bedrooms:
					searchParams?.guest ?? undefined,
				bathrooms:
					searchParams?.bathroom ?? undefined,
			},
			select: {
				photo: true,
				id: true,
				price: true,
				description: true,
				country: true,
				favorite: {
					where: {
						userId: userId ?? undefined,
					},
				},
			},
		})
		return data
	} catch (error) {
		console.error("Error fetching data:", error)
		return []
	}
}

async function ShowItems({
	searchParams,
}: {
	searchParams?: {
		filter?: string
		country?: string
		guest?: string
		room?: string
		bathroom?: string
	}
}) {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
	const data = await getData({
		searchParams: searchParams,
		userId: user?.id,
	})

	return (
		<>
			{data.length > 0 ? (
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
					{data.map((item) => (
						<ListingCard
							key={item.id}
							description={
								item.description as string
							}
							imagePath={item.photo as string}
							location={item.country as string}
							price={item.price as number}
							userId={user?.id}
							favoriteId={item.favorite[0]?.id}
							isInFavoriteList={
								item.favorite.length > 0
							}
							homeId={item.id}
							pathname="/"
						/>
					))}
				</div>
			) : (
				<NotFound
					title="Sorry, There are no listing for this category..."
					subtitle="Please check another category or create your own..."
				/>
			)}
		</>
	)
}

export default function Home({
	searchParams,
}: {
	searchParams?: {
		filter?: string
		country?: string
		guest?: string
		room?: string
		bathroom?: string
	}
}) {
	return (
		<div className="container mx-auto px-5 lg:px-10">
			<Categories />
			<Suspense
				key={searchParams?.filter}
				fallback={<CardSkeleton />}
			>
				<ShowItems searchParams={searchParams} />
			</Suspense>
		</div>
	)
}
