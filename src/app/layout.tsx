import "./globals.css";

import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whitepixel',
  description: 'Social Media Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
