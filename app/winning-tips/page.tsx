import type { Metadata } from 'next'
import Image from 'next/image'
import { winningProofs, withdrawalTips } from '@/content/winning-tips'

export const metadata: Metadata = {
  title: 'Winning Tips',
  description: 'Real player withdrawal proofs and expert winning tips for online casino players at iGamingHub.',
  alternates: { canonical: 'https://igamingtips.org/winning-tips/' },
}

export default function WinningTipsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <section className="text-center px-4 mb-16">
        <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Proven Results
        </span>
        <h1 className="text-4xl font-bold mt-2 mb-4" style={{ color: 'var(--text)' }}>
          Winning Tips
        </h1>
        <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Real withdrawal proofs from our players, plus expert tips to help you cash out faster and smarter.
        </p>
      </section>

      {/* Winning Proofs Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>
          Player Withdrawal Proofs
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Verified screenshots submitted by real players. Updated regularly.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {winningProofs.map((proof, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'var(--card)',
                border: '1px solid rgba(0,180,216,0.12)',
              }}
            >
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={proof.image}
                  alt={proof.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold mb-1" style={{ color: 'var(--text)' }}>{proof.caption}</p>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>{proof.amount}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{proof.date}</span>
                </div>
                {proof.ctaUrl && (
                  <a
                    href={proof.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full rounded-lg py-2 text-sm font-semibold"
                    style={{ background: 'var(--accent)', color: '#000' }}
                  >
                    Play Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {winningProofs.length === 0 && (
          <div
            className="text-center py-20 rounded-xl"
            style={{ background: 'var(--card)', border: '1px solid rgba(0,180,216,0.12)', color: 'var(--text-muted)' }}
          >
            <p className="text-lg mb-2">No proofs uploaded yet.</p>
            <p className="text-sm">Check back soon — player submissions are reviewed and added regularly.</p>
          </div>
        )}
      </section>

      {/* Withdrawal Tips Section */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--text)' }}>
          Withdrawal Tips
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {withdrawalTips.map((tip, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{
                background: 'var(--card)',
                border: '1px solid rgba(0,180,216,0.12)',
              }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="rounded-full flex items-center justify-center shrink-0"
                  style={{
                    width: 36, height: 36,
                    background: 'rgba(0,180,216,0.12)',
                    color: 'var(--accent)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--text)' }}>{tip.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}