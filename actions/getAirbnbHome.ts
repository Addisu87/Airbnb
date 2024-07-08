'use server';

import { redirect } from 'next/navigation';

import prismadb from '@/lib/db';

export async function getAirbnbHome({ userId }: { userId: string }) {
	const data = await prismadb.home.findFirst({
		where: {
			userId: userId,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});

	let newData;

	if (data === null) {
		newData = await prismadb.home.create({
			data: {
				userId: userId,
			},
		});
		return redirect(`/rent/${newData.id}/booking`);
	}

	switch (true) {
		case data.addedCategory && !data.addedDescription:
			return redirect(`/rent/${data.id}/description`);

		case data.addedCategory &&
			data.addedDescription &&
			!data.addedLocation:
			return redirect(`/rent/${data.id}/address`);

		case data.addedCategory &&
			data.addedDescription &&
			data.addedLocation:
			newData = await prismadb.home.create({
				data: {
					userId: userId,
				},
			});
			return redirect(`/rent/${newData.id}/booking`);

		default:
			return redirect(`/rent/${data.id}/booking`);
	}
}
