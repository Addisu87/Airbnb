'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';

interface SubmitButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	label?: { default: string; loading: string };
	loader?: React.ReactNode;
	className?: string;
}

export function SubmitButton({
	onClick,
	label = { default: 'Next', loading: 'Please wait...' },
	loader,
	className,
}: SubmitButtonProps) {
	const { pending } = useFormStatus();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!pending && onClick) {
			onClick(e);
		}
	};

	const buttonClassName = className ? `button ${className}` : 'button';

	return (
		<Button
			type='submit'
			disabled={pending}
			onClick={handleClick}
			className={buttonClassName}
		>
			{pending
				? loader || <Loader2 className='mr-2 h-4 w-4 animate-spin' />
				: label.default}
			{pending && label.loading}
		</Button>
	);
}
