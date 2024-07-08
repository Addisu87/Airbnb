'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Counter = ({ name }: { name: string }) => {
	const [amount, setAmount] = useState(0);

	const handleIncrease = () => {
		setAmount(amount + 1);
	};
	const handleDecrease = () => {
		if (amount > 0) {
			setAmount(amount - 1);
		}
	};
	return (
		<div className='flex items-center gap-x-4'>
			<input type='hidden' name={name} value={amount} />
			<Button
				variant='outline'
				size='icon'
				type='button'
				onClick={handleDecrease}
			>
				<Minus className='h-4 w-4 text-primary' />
			</Button>
			<span className='font-medium text-lg'>{amount}</span>
			<Button
				variant='outline'
				size='icon'
				type='button'
				onClick={handleIncrease}
			>
				<Plus className='h-4 w-4 text-primary' />
			</Button>
		</div>
	);
};

export default Counter;
