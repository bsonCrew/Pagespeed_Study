import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="flex min-h-screen flex-col p-24 border-2 border-white">
            <div className="w-full h-full">
                <p className="mb-12 text-2xl">
                    Use Pagespeed
                </p>
                {children}
            </div>
        </main>
        </body>
        </html>
    )
}