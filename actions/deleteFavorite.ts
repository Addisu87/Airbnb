'use server';

import { revalidatePath } from 'next/cache';

import prismadb from '@/lib/db';

export async function deleteFavorite(formData: FormData) {
	const favoriteId = formData.get('favoriteId') as string;
	const userId = formData.get('userId') as string;
	const pathname = formData.get('pathname') as string;

	const data = await prismadb.favorite.delete({
		where: {
			id: favoriteId,
			userId: userId,
		},
	});

	revalidatePath(pathname);
}
