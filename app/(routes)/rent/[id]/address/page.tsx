'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import BottomBar from '@/app/components/BottomBar';
import { useCountries } from '@/app/hooks/getCountries';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { getLocation } from '@/actions/getLocation';
import Heading from '@/app/components/Heading';

export default function AddressRoute({
	params,
}: {
	params: { id: string };
}) {
	const [locationValue, setLocationValue] = useState('');

	const { getAllCountries } = useCountries();

	const LazyMap = dynamic(() => import('@/app/components/Map'), {
		ssr: false,
		loading: () => <Skeleton className='h-[50vh] w-full' />,
	});

	return (
		<div className='w-3/5 mx-auto'>
			<Heading title='Where is your home located?' />

			<form action={getLocation}>
				<input type='hidden' name='homeId' value={params.id} />
				<input
					type='hidden'
					name='countryValue'
					value={locationValue}
				/>
				<div className='mb-5'>
					<Select
						required
						onValueChange={(value) => setLocationValue(value)}
					>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Select a Country' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{getAllCountries().map((item) => (
									<SelectItem key={item.value} value={item.value}>
										{item.flag} {item.label} / {item.region}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<LazyMap locationValue={locationValue} />
				<BottomBar />
			</form>
		</div>
	);
}
