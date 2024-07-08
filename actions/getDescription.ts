'use server';

import { redirect } from 'next/navigation';

import prismadb from '@/lib/db';
import { supabase } from '@/lib/subabase';

export async function getDescription(formData: FormData) {
	const title = formData.get('title') as string;
	const description = formData.get('description') as string;
	const price = formData.get('price');
	const imageFile = formData.get('image') as File;
	const homeId = formData.get('homeId') as string;

	const guestNumber = formData.get('guest') as string;
	const roomNumber = formData.get('room') as string;
	const bathroomNumber = formData.get('bathroom') as string;

	const { data: imageData } = await supabase.storage
		.from('images')
		.upload(`${imageFile.name}-${new Date()}`, imageFile, {
			cacheControl: '2592000',
			contentType: 'image/png',
		});

	const data = await prismadb.home.update({
		where: {
			id: homeId,
		},
		data: {
			title: title,
			description: description,
			guests: guestNumber,
			bedrooms: roomNumber,
			bathrooms: bathroomNumber,
			photo: imageData?.path,
			price: Number(price),
			addedDescription: true,
		},
	});

	return redirect(`/rent/${homeId}/address`);
}
