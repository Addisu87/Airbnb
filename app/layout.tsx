import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/app/components/Navbar";

import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

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
      <body className={cn("antialiased", font.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
