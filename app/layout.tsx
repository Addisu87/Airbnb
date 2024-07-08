import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import Navbar from '@/app/components/Navbar';

import './globals.css';
import ToasterProvider from '@/providers/toast-provider';
import { ThemeProvider } from '@/providers/theme-provider';

const font = Nunito_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${font.className} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					<Navbar />
					{children}
					<ToasterProvider />
				</ThemeProvider>
			</body>
		</html>
	);
}
