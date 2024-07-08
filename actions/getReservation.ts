'use server';

import { redirect } from 'next/navigation';

import prismadb from '@/lib/db';

export async function getReservation(formData: FormData) {
	const userId = formData.get('userId') as string;
	const homeId = formData.get('homeId') as string;
	const startDate = formData.get('startDate') as string;
	const endDate = formData.get('endDate') as string;

	const data = await prismadb.reservation.create({
		data: {
			userId: userId,
			startDate: startDate,
			endDate: endDate,
			homeId: homeId,
		},
	});

	return redirect('/');
}
