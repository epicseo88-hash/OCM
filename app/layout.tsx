import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'iGamingHub — Expert Online Casino Reviews',
    template: '%s | iGamingHub',
  },
  description: 'iGamingHub delivers independent, expert-reviewed online casino rankings. Find your edge with trusted reviews, bonus guides, and strategy content.',
  metadataBase: new URL('https://igaminghub.com'),
  openGraph: {
    type: 'website',
    siteName: 'iGamingHub',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iGamingHub',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <CustomCursor />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
