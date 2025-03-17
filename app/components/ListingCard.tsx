import Image from "next/image"
import Link from "next/link"

import { useCountries } from "../hooks/getCountries"
import {
	AddHeartButton,
	DeleteHeartButton,
} from "./HeartButton"
import { addFavorite } from "@/actions/addFavorite"
import { deleteFavorite } from "@/actions/deleteFavorite"

interface ListingProps {
	imagePath: string
	description: string
	location: string
	price: number
	userId: string | undefined
	homeId: string
	favoriteId: string
	isInFavoriteList: boolean
	pathname: string
}

const ListingCard: React.FC<ListingProps> = ({
	imagePath,
	description,
	location,
	price,
	userId,
	homeId,
	favoriteId,
	isInFavoriteList,
	pathname,
}) => {
	const { getCountryByValue } = useCountries()
	const country = getCountryByValue(location)

	return (
		<div className="flex flex-col">
			<div className="relative h-72">
				<Image
					src={`https://hljcmoxhoxlzloofamyr.supabase.co/storage/v1/object/public/images/${imagePath}`}
					alt="Image of House"
					fill
					className="rounded-lg h-full object-cover"
				/>
				{userId && (
					<div className="z-10 absolute top-2 right-2">
						{isInFavoriteList ? (
							<form action={deleteFavorite}>
								<input
									type="hidden"
									name="favoriteId"
									value={favoriteId}
								/>
								<input
									type="hidden"
									name="userId"
									value={userId}
								/>
								<input
									type="hidden"
									name="pathname"
									value={pathname}
								/>
								<DeleteHeartButton />
							</form>
						) : (
							<form action={addFavorite}>
								<input
									type="hidden"
									name="userId"
									value={userId}
								/>
								<input
									type="hidden"
									name="homeId"
									value={homeId}
								/>
								<input
									type="hidden"
									name="pathname"
									value={pathname}
								/>
								<AddHeartButton />
							</form>
						)}
					</div>
				)}
			</div>

			<Link
				href={`/rooms/${homeId}`}
				className="mt-2"
			>
				<h3 className="font-medium text-base">
					{country?.flag} {country?.label} /{" "}
					{country?.region}
				</h3>
				<p className="text-muted-foreground text-sm line-clamp-2">
					{description}
				</p>
				<p className="p-2 text-muted-foreground">
					<span className="font-medium text-black">
						${price}
					</span>{" "}
					Night
				</p>
			</Link>
		</div>
	)
}

export default ListingCard
