import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import '@/public/css/vendor.css'
import './globals.css'

const jost = Jost({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'Account | Commerce website',
    description: 'A commerce website built with Next.js',
    icons: '/favicon.ico',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${jost.className}`}>{children}</body>
        </html>
    )
}
