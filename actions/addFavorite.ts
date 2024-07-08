'use server';

import { revalidatePath } from 'next/cache';

import prismadb from '@/lib/db';

export async function addFavorite(formData: FormData) {
	const homeId = formData.get('homeId') as string;
	const userId = formData.get('userId') as string;
	const pathname = formData.get('pathname') as string;

	const data = await prismadb.favorite.create({
		data: {
			homeId: homeId,
			userId: userId,
		},
	});

	revalidatePath(pathname);
}
