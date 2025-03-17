import { unstable_noStore as noStore } from "next/cache"
import prismadb from "@/lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import RoomDetails from "@/app/components/RoomDetails"

// fetch data
async function getData(homeId: string) {
	noStore()
	const data = await prismadb.home.findUnique({
		where: {
			id: homeId,
		},
		select: {
			title: true,
			description: true,
			guests: true,
			bedrooms: true,
			bathrooms: true,
			photo: true,
			user: {
				select: {
					firstName: true,
					imageSrc: true,
				},
			},
			categoryName: true,
			country: true,
			reservation: {
				where: {
					homeId: homeId,
				},
			},
		},
	})

	return data
}

export default async function RoomsRoute({
	params,
}: {
	params: { id: string }
}) {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
	const data = await getData(params.id)

	if (!data) {
		return <div>Not found</div>
	}

	return (
		<RoomDetails
			data={data}
			user={user}
			params={params}
		/>
	)
}
