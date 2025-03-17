"use client"

import { useCountries } from "@/app/hooks/getCountries"

interface CountryDisplayProps {
	countryValue: string
	children: (
		country: ReturnType<
			typeof useCountries
		>["getCountryByValue"],
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
