import { redirect } from "next/navigation"
import { unstable_noStore as noStore } from "next/cache"

import Heading from "@/components/Heading"
import ListingCard from "@/components/ListingCard"
import NotFound from "@/components/Not-Found"
import prismadb from "@/lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

async function getData(userId: string) {
	noStore()
	const data = await prismadb.home.findMany({
		where: {
			userId: userId,
			addedCategory: true,
			addedDescription: true,
			addedLocation: true,
		},
		select: {
			id: true,
			country: true,
			photo: true,
			description: true,
			price: true,
			favorite: {
				where: {
					userId: userId,
				},
			},
		},
		orderBy: {
			createdAt: "desc",
		},
	})
	return data
}

const ListingRoute = async () => {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	if (!user) {
		return redirect("/")
	}

	const data = await getData(user.id)

	return (
		<section className="container mx-auto px-5 lg:px-10 mt-6">
			<Heading title="Your Homes" />

			{data.length > 0 ? (
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
					{data.map((item) => (
						<ListingCard
							key={item.id}
							description={
								item.description as string
							}
							favoriteId={
								item.favorite[0]?.id as string
							}
							location={item.country as string}
							pathname="/listings"
							homeId={item.id as string}
							price={item.price as number}
							userId={user.id}
							imagePath={item.photo as string}
							isInFavoriteList={
								(item.favorite.length as number) >
								0
									? true
									: false
							}
						/>
					))}
				</div>
			) : (
				<NotFound
					title="Please list a home on airbnb to show it here...."
					subtitle="Sorry, you don't have any homes listed!"
				/>
			)}
		</section>
	)
}

export default ListingRoute
