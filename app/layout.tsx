import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/rootpage/header/Header'
import Footer from '@/components/rootpage/footer/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600", "700", "500", "200", "300"] })

export const metadata: Metadata = {
  title: 'Fablab Universiapolis',
  description: 'A hub where ideas materialize. Our fabrication lab merges technology and creativity. Join us in shaping the future through hands-on exploration at FabLab Universiapolis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
