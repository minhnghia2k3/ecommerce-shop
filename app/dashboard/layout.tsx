import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/public/css/vendor.css'
import './style.css'
import Navbar from '../ui/dashboard/Navbar'
import Sidebar from '../ui/dashboard/Sidebar'
import Footer from '../ui/dashboard/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Dashboard | Commerce website',
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
            <body className={`${inter.className}`}>
                <Navbar />
                <Sidebar />
                <main id="main" className="main">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
