'use client';

import { useState } from 'react';

import { Card, CardHeader } from '@/components/ui/card';
import { categoryItems } from '@/lib/categoryItems';

const SelectCategory = () => {
	const [selectCategory, setSelectCategory] = useState<
		string | undefined
	>(undefined);

	return (
		<>
			<div className='grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto'>
				<input
					type='hidden'
					name='categoryName'
					value={selectCategory as string}
				/>
				{categoryItems.map((item) => (
					<div
						key={item.id}
						className='cursor-pointer overflow-scroll'
					>
						<Card
							className={
								selectCategory === item.label ? 'border-primary' : ''
							}
							onClick={() => setSelectCategory(item.label)}
						>
							<CardHeader className='flex flex-col items-center justify-center'>
								<item.icon size={28} />
								<div className='font-medium text-sm mt-1'>
									<p>{item.label}</p>
								</div>
							</CardHeader>
						</Card>
					</div>
				))}
			</div>
		</>
	);
};

export default SelectCategory;
