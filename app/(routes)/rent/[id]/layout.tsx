import type { ReactNode } from 'react';

export default function RentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className='mt-10'>{children}</div>
		</>
	);
}
