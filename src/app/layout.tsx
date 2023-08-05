import Navbar from '@/components/Layout/Navbar'
import './globals.css'
import Providers from './provider'
import { Inter, Maven_Pro } from 'next/font/google'
import Footer from '@/components/Layout/Footer'



const inter = Maven_Pro({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
    <html lang="en">
      <body className={`${inter.className} max-w-6xl xl:max-w-7xl mx-auto `}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
    </Providers>
  )
}
