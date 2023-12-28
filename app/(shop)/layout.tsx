import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import '@/public/css/vendor.css'
import '../globals.css'
import NavBar from '../ui/common/NavBar'
import Footer from '../ui/common/Footer'
import Banner from '../ui/common/Banner'

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
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" type="text/css" href="icomoon/icomoon.css" />
                <link rel="stylesheet" type="text/css" href="css/vendor.css" />
                <link rel="stylesheet" type="text/css" href="style.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&amp;family=Jost:wght@400;600;700&amp;display=swap" rel="stylesheet" />
            </Head>
            <body className={jost.className}>
                <NavBar />
                <Banner />
                {children}
                <Footer />
            </body>
        </html>
    )
}
