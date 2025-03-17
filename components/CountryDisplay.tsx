"use client"

import { Home } from "@prisma/client"
import { useCountries } from "@/hooks/getCountries"

type CountryData = {
	value: string
	label: string
	flag: string
	latLang: [number, number]
	region: string
}

interface CountryDisplayProps {
	countryValue: NonNullable<Home["country"]>
	children: (
		country: CountryData | undefined,
	) => React.ReactNode
}

export default function CountryDisplay({
	countryValue,
	children,
}: CountryDisplayProps) {
	const { getCountryByValue } = useCountries()
	const country = getCountryByValue(countryValue)

	return <>{children(country)}</>
}
