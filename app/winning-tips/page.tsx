import type { Metadata } from 'next'
import Image from 'next/image'
import { winningProofs, withdrawalTips } from '@/content/winning-tips'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

export const metadata: Metadata = {
  title: 'Epicwin Real Winning Tips',
  description: 'Real player withdrawal proofs and expert winning tips for online casino players at iGamingHub.',
  alternates: { canonical: 'https://igamingtips.org/winning-tips/' },
}

const howItWorks = [
  {
    step: '1', label: 'Join Telegram', desc: 'Join our Telegram group to get winning tips daily',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="#7c3aed"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.88 13.47l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.268.089z"/></svg>,
  },
  {
    step: '2', label: 'Follow Tips', desc: 'Use the tips provided by our team',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6H8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z"/></svg>,
  },
  {
    step: '3', label: 'Play & Win', desc: 'Play your favourite games and win big',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 11v4M10 13H6M17 12v.01M14 15v.01"/><path d="M12 3c-1.5 0-3 .5-3 2h6c0-1.5-1.5-2-3-2z"/></svg>,
  },
  {
    step: '4', label: 'Withdraw & Enjoy', desc: 'Fast and secure withdrawal',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v2M12 16v2M9 9h1a2 2 0 0 1 0 4h-1m4 0h1a2 2 0 0 0 0-4h-1"/></svg>,
  },
]

const whyChoose = [
  {
    title: '100% Real Withdrawal', desc: 'We show real proofs, not just talk.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
  {
    title: 'Daily Winning Tips', desc: 'Fresh tips updated every day.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: 'Trusted & Secure', desc: 'Your safety is our top priority.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: 'Fast & Safe Payouts', desc: 'We process withdrawals quickly.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
]

export default function WinningTipsPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-24 pb-16" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <section className="text-center px-4 mb-2 md:mb-12">
        <span className="hidden md:inline" style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Proven Results
        </span>
        <h1 className="text-lg md:text-4xl font-bold mt-1 mb-1 md:mb-4" style={{ color: 'var(--text)' }}>
          Epicwin Real Winning Tips
        </h1>
        <p className="hidden md:block max-w-xl mx-auto" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Real withdrawal proofs from our players, plus expert tips to help you cash out faster and smarter.
        </p>
      </section>

      {/* Telegram CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 mb-2 md:mb-10">
        <a
          href="https://t.me/EPICWININFINITY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg px-3 py-2 md:rounded-xl md:px-6 md:py-4 gap-2 md:gap-4"
          style={{ background: 'linear-gradient(90deg, #5b21b6 0%, #7c3aed 100%)', border: '1px solid rgba(124,58,237,0.4)' }}
        >
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.88 13.47l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.268.089z"/>
            </svg>
            <p className="font-semibold text-white text-xs md:text-sm">Join @EPICWININFINITY for daily winning tips</p>
          </div>
          <span
            className="rounded-md px-3 py-1 text-xs md:rounded-lg md:px-4 md:py-2 md:text-sm font-bold shrink-0"
            style={{ background: 'white', color: '#7c3aed' }}
          >
            Join Now
          </span>
        </a>
      </section>

      {/* Winning Proofs Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-base md:text-2xl font-bold mb-1 md:mb-2" style={{ color: 'var(--text)' }}>
          Player Withdrawal Proofs
        </h2>
        <p className="hidden md:block mb-8" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Verified screenshots submitted by real players. Updated regularly.
        </p>
        <div className="mb-3 md:mb-8" />
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
              <div className="relative w-full aspect-square md:aspect-[4/3]">
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
            <p className="text-sm">Check back soon. Player submissions are reviewed and added regularly.</p>
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="mb-16 px-4">
        <div className="max-w-6xl mx-auto rounded-2xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(0,180,216,0.06) 100%)', border: '1px solid rgba(124,58,237,0.2)' }}>
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: 'var(--text)' }}>
            How It Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
            {howItWorks.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 relative">
                {/* Icon card */}
                <div
                  className="rounded-2xl flex items-center justify-center relative"
                  style={{ width: 80, height: 80, background: 'rgba(124,58,237,0.18)', border: '2px solid rgba(124,58,237,0.35)', boxShadow: '0 0 24px rgba(124,58,237,0.2)' }}
                >
                  {/* Step badge */}
                  <span
                    className="absolute -top-2 -right-2 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ width: 22, height: 22, background: '#7c3aed', color: '#fff' }}
                  >
                    {item.step}
                  </span>
                  {item.icon}
                </div>
                {/* Arrow between steps on desktop */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 z-10" style={{ color: 'rgba(124,58,237,0.5)', fontSize: '1.4rem' }}>
                    ›
                  </div>
                )}
                <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EpicWin */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--text)' }}>
          Why Choose EpicWin
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChoose.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex gap-3 items-start"
              style={{ background: 'var(--card)', border: '1px solid rgba(124,58,237,0.15)' }}
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold mb-1 text-sm" style={{ color: 'var(--text)' }}>{item.title}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: 'var(--text)' }}>
          Trusted by Thousands of Players
        </h2>
        <p className="text-center mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          Real feedback from our Telegram community.
        </p>
        <TestimonialsCarousel />
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
