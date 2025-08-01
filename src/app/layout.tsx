import type { Metadata } from "next";

import "./globals.css";

import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose what you need
})



export const metadata: Metadata = {
  title: "Dashstack",
  description: "Dashboard by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
