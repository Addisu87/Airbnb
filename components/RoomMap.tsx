"use client"

import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"
import { useState } from "react"

const RoomMap = ({
	locationValue,
}: {
	locationValue: string
}) => {
	const LazyMap = dynamic(
		() => import("@/components/Map"),
		{
			ssr: false,
			loading: () => (
				<Skeleton className="h-[50vh] w-full" />
			),
		},
	)

	return (
		<div>
			<LazyMap locationValue={locationValue} />
		</div>
	)
}

export default RoomMap
