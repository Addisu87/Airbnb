import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Navbar from "@/app/components/Navbar";

import "./globals.css";

const font = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
