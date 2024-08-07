'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { cn } from '@/lib/utils';

import { categoryItems } from '@/lib/categoryItems';

const Categories = () => {
	const searchParams = useSearchParams();
	const search = searchParams.get('filter');
	const pathname = usePathname();

	const createQueryString = useCallback(
		(label: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(label, value);
			return params.toString();
		},
		[searchParams],
	);

	return (
		<div className='flex gap-x-8 mt-5 w-full overflow-x-scroll transition cursor-pointer no-scrollbar'>
			{categoryItems.map((item) => (
				<Link
					key={item.id}
					href={
						pathname + '?' + createQueryString('filter', item.label)
					}
					className={cn(
						search === item.label
							? 'border-b-2 border-black pb-2 flex-shrink-0 dark:border-primary'
							: 'opacity-70 flex-shrink-0',
						'flex flex-col items-center justify-center',
					)}
				>
					<div className='flex flex-col items-center justify-center'>
						<item.icon size={28} />
						<div className='font-medium text-sm mt-1'>
							<p>{item.label}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Categories;
