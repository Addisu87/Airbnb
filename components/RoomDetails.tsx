"use client"

import {
	Home,
	Reservation,
	User,
} from "@prisma/client"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import CategoryShowCase from "@/components/CategoryShowCase"
import RoomMap from "@/components/RoomMap"
import Calender from "@/components/Calender"
import { Button } from "@/components/ui/button"
import { SubmitButton } from "@/components/SubmitButtons"
import Link from "next/link"
import Heading from "@/components/Heading"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"
import CountryDisplay from "./CountryDisplay"
import { getReservation } from "@/actions/getReservation"

type HomeWithRelations = Home & {
	user: Pick<
		User,
		"firstName" | "imageSrc"
	> | null
	reservation: Reservation[]
}

interface RoomDetailsProps {
	data: HomeWithRelations
	user: { id: string } | null
	params: { id: string }
}

export default function RoomDetails({
	data,
	user,
	params,
}: RoomDetailsProps) {
	return (
		<div className="w-[75%] mx-auto mt-10 mb-12">
			<Heading title={data?.title || ""} />
			<div className="relative h-[500px] w-full">
				<Image
					src={`https://hljcmoxhoxlzloofamyr.supabase.co/storage/v1/object/public/images/${data?.photo}`}
					alt="Image of House"
					fill
					className="rounded-lg object-cover w-full"
					priority
				/>
			</div>

			<CountryDisplay
				countryValue={data.country || ""}
			>
				{(country) => (
					<>
						<div className="flex flex-col gap-2 mt-4">
							<h3 className="font-semibold text-xl">
								{country?.label},{" "}
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
									<AvatarFallback>
										UI
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-col ml-4">
									<h3 className="font-medium">
										Hosted by{" "}
										{data?.user?.firstName}
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
					</>
				)}
			</CountryDisplay>

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
	)
}
