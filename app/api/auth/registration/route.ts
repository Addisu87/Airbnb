import { NextResponse } from "next/server"
import { unstable_noStore as noStore } from "next/cache"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import prismadb from "@/lib/db"

export async function GET() {
	noStore()
	try {
		const { getUser } = getKindeServerSession()
		const user = await getUser()

		if (!user || !user.id) {
			// Instead of toast, return an error response or redirect
			return NextResponse.redirect(
				"https://airbnb-bnt8.vercel.app",
			)
		}

		let dbUser = await prismadb.user.findUnique({
			where: {
				id: user.id,
			},
		})

		if (!dbUser) {
			dbUser = await prismadb.user.create({
				data: {
					id: user.id,
					firstName: user.given_name ?? "",
					lastName: user.family_name ?? "",
					email: user.email ?? "",
					imageSrc:
						user.picture ??
						`https://avatar.vercel.sh/${user.given_name}`,
				},
			})
		}

		return NextResponse.redirect(
			"https://airbnb-bnt8.vercel.app",
		)
	} catch (error) {
		console.error(
			"Error in registration route:",
			error,
		)
		return NextResponse.json(
			{ error: "Something went wrong!" },
			{ status: 500 },
		)
	}
}
