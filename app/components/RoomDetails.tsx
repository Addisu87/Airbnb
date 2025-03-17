"use client"

import { useCountries } from "@/app/hooks/getCountries"
import {
	Home,
	Reservation,
	User,
} from "@prisma/client"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import CategoryShowCase from "@/app/components/CategoryShowCase"
import RoomMap from "@/app/components/RoomMap"
import Calender from "@/app/components/Calender"
import { Button } from "@/components/ui/button"
import { SubmitButton } from "@/app/components/SubmitButtons"
import Link from "next/link"
import Heading from "@/app/components/Heading"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"

interface RoomDetailsProps {
	data: Home & {
		user: Pick<User, "firstName" | "imageSrc">
		reservation: Reservation[]
	}
	user: { id: string } | null
	params: { id: string }
}

export default function RoomDetails({
	data,
	user,
	params,
}: RoomDetailsProps) {
	const { getCountryByValue } = useCountries()
	const country = getCountryByValue(
		data?.country as string,
	)

	return (
		<div className="w-[75%] mx-auto mt-10 mb-12">
			<Heading title={data?.title || ""} />
			<div className="relative h-[500px] w-full">
				<Image
					src={`https://bstgrdyurhlpzkfyoefz.supabase.co/storage/v1/object/public/images/${data?.photo}`}
					alt="Image of House"
					fill
					className="rounded-lg object-cover"
					priority
				/>
			</div>
			<div className="flex justify-between gap-x-24 mt-8">
				<div className="w-2/3">
					<h3 className="font-medium text-base">
						{country?.flag} {country?.label} /{" "}
						{country?.region}
					</h3>
					<div className="flex gap-x-2 text-muted-foreground">
						<p>{data?.guests} Guests</p> *
						<p>{data?.bedrooms} Bedrooms</p> *
						<p>{data?.bathrooms} Bathrooms</p>
					</div>
					<div className="flex items-center mt-6">
						<Avatar className="hidden lg:block">
							<AvatarImage
								src={
									data?.user?.imageSrc ??
									"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
								}
							/>
							<AvatarFallback>UI</AvatarFallback>
						</Avatar>
						<div className="flex flex-col ml-4">
							<h3 className="font-medium">
								Hosted by {data?.user?.firstName}
							</h3>
							<p className="text-sm text-muted-foreground">
								Hosted since 2015
							</p>
						</div>
					</div>

					<Separator className="my-7" />

					<CategoryShowCase
						categoryName={
							data?.categoryName as string
						}
					/>

					<Separator className="my-7" />

					<p className="text-muted-foreground">
						{data?.description}
					</p>

					<Separator className="my-7" />
					<RoomMap
						locationValue={
							country?.value as string
						}
					/>
				</div>

				<form
					action={getReservation}
					className="flex flex-col items-center"
				>
					<input
						type="hidden"
						name="homeId"
						value={params.id}
					/>
					<input
						type="hidden"
						name="userId"
						value={user?.id || ""}
					/>
					<Calender
						reservation={data?.reservation}
					/>

					{user?.id ? (
						<SubmitButton
							label={{
								default: "Reserve",
								loading: "loading...",
							}}
							className="w-full"
						/>
					) : (
						<Button className="w-full" asChild>
							<Link href="/api/auth/login">
								Reserve
							</Link>
						</Button>
					)}
				</form>
			</div>
		</div>
	)
}
