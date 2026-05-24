import type { Metadata } from 'next'
import { casinos } from '@/content/casinos'
import ReviewsClient from './ReviewsClient'

export const metadata: Metadata = {
  title: 'Online Casino Reviews 2025',
  description: 'Browse iGamingHub\'s complete index of expert-reviewed online casinos. Filter by rating, bonus size, or game type to find your perfect match.',
  alternates: { canonical: 'https://igaminghub.com/reviews/' },
  openGraph: {
    title: 'Online Casino Reviews 2025 | iGamingHub',
    description: 'Expert-audited casino rankings with no paid placements.',
    url: 'https://igaminghub.com/reviews/',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
}

export default function ReviewsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ background: '#16003E' }}>
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-3">
            200+ casinos audited
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#F0EBE3', letterSpacing: '-0.03em' }}
          >
            Casino Reviews
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed" style={{ color: 'rgba(240,235,227,0.6)' }}>
            Every casino scored across bonuses, games, payments, support, and mobile — independently, with real accounts.
          </p>
        </header>
        <ReviewsClient casinos={casinos} />
      </div>
    </div>
  )
}
