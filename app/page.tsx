import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { casinos } from '@/content/casinos'
import { posts } from '@/content/posts'
import CasinoCard from '@/components/CasinoCard'
import MarqueeBanner from '@/components/MarqueeBanner'
import NewsletterForm from '@/components/NewsletterForm'
import StarRating from '@/components/StarRating'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'iGamingHub — Expert Online Casino Reviews',
  description: 'Find your edge with iGamingHub. Independent expert reviews of 200+ online casinos, exclusive bonus guides, and proven strategy content trusted by 50,000 readers per month.',
  alternates: { canonical: 'https://igaminghub.com/' },
  openGraph: {
    title: 'iGamingHub — Expert Online Casino Reviews',
    description: 'Independent expert casino reviews trusted by 50,000 players per month.',
    url: 'https://igaminghub.com/',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'iGamingHub — Expert Online Casino Reviews',
    description: 'Independent expert casino reviews trusted by 50,000 players per month.',
    images: ['/og/default.png'],
  },
}

const CATEGORIES = [
  { label: 'Slots', icon: 'S', href: '/reviews/', desc: '8,000+ titles' },
  { label: 'Live Casino', icon: 'L', href: '/reviews/', desc: '500+ tables' },
  { label: 'Sports Betting', icon: 'SB', href: '/reviews/', desc: '40+ sports' },
  { label: 'Poker', icon: 'P', href: '/reviews/', desc: 'Global networks' },
  { label: 'Crypto', icon: 'C', href: '/reviews/', desc: '20+ coins' },
  { label: 'VIP', icon: 'V', href: '/reviews/', desc: 'Elite rewards' },
]

const STATS = [
  { value: '200+', label: 'Casinos Reviewed' },
  { value: '50k', label: 'Readers Monthly' },
  { value: '10 yrs', label: 'Industry Experience' },
]

const editorial = casinos[0]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden grain pt-24"
        style={{ background: '#16003E' }}
      >
        <div className="particle-grid absolute inset-0 z-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <FadeUp>
            <p
              className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ background: 'rgba(0,180,216,0.12)', color: '#00B4D8', border: '1px solid rgba(0,180,216,0.25)' }}
            >
              Trusted by 50,000+ players
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1
              className="font-bold leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(4rem, 9vw, 9rem)', color: '#F0EBE3', letterSpacing: '-0.03em' }}
            >
              Find Your{' '}
              <span
                style={{
                  color: '#00B4D8',
                  textShadow: '0 0 40px rgba(0,180,216,0.5)',
                }}
              >
                Edge.
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p
              className="mx-auto mb-10 max-w-xl text-lg font-medium leading-relaxed"
              style={{ color: 'rgba(240,235,227,0.65)' }}
            >
              Independent casino reviews with no paid placements. Every rating earned through 50-point audits by industry veterans.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/reviews/" className="btn-glow text-base">
                View Top Casinos
              </Link>
              <Link
                href="/blog/"
                className="rounded-xl px-8 py-3.5 text-base font-bold transition-all duration-200 hover:bg-white/5"
                style={{ border: '1px solid rgba(240,235,227,0.2)', color: '#F0EBE3' }}
              >
                Strategy Guides
              </Link>
            </div>
          </FadeUp>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #16003E)' }}
          aria-hidden="true"
        />
      </section>

      {/* Top Casinos Strip */}
      <section className="py-20" style={{ background: '#16003E' }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-2">Ranked by experts</p>
                <h2
                  className="font-bold"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
                >
                  Top Casinos This Month
                </h2>
              </div>
              <Link
                href="/reviews/"
                className="hidden sm:inline-block text-sm font-semibold transition-colors hover:text-gas-blue"
                style={{ color: 'rgba(240,235,227,0.5)' }}
              >
                See all 6 reviews
              </Link>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {casinos.slice(0, 5).map((casino, i) => (
              <FadeUp key={casino.slug} delay={i * 80}>
                <CasinoCard casino={casino} rank={i + 1} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeBanner />

      {/* Categories */}
      <section className="py-20" style={{ background: '#0F0028' }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-3">Browse by type</p>
              <h2
                className="font-bold"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
              >
                Every Game Category, Covered
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat, i) => (
              <FadeUp key={cat.label} delay={i * 60}>
                <Link
                  href={cat.href}
                  className="group flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: 'rgba(59,31,10,0.3)',
                    border: '1px solid rgba(240,235,227,0.06)',
                  }}
                >
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200 group-hover:shadow-glow-blue-sm"
                    style={{ background: 'rgba(0,180,216,0.12)', color: '#00B4D8' }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-off-white">{cat.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(240,235,227,0.4)' }}>{cat.desc}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Pick */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#1D0055' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${editorial.logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <p
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-6"
                  style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  Editorial Pick
                </p>
                <h2
                  className="font-bold mb-4"
                  style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', color: '#F0EBE3', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                >
                  {editorial.name}
                </h2>
                <StarRating rating={editorial.rating} size="lg" />
                <p className="mt-5 text-base leading-relaxed" style={{ color: 'rgba(240,235,227,0.7)' }}>
                  {editorial.overview.slice(0, 200)}...
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {editorial.pros.slice(0, 2).map((pro) => (
                    <span
                      key={pro}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ background: 'rgba(0,180,216,0.1)', color: '#00B4D8', border: '1px solid rgba(0,180,216,0.2)' }}
                    >
                      {pro}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href={`/reviews/${editorial.slug}/`} className="btn-glow">
                    Read Full Review
                  </Link>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(45,10,107,0.4)',
                  border: '1px solid rgba(0,180,216,0.15)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Image
                  src={editorial.logo}
                  alt={`${editorial.name} logo`}
                  width={240}
                  height={120}
                  className="mb-6 rounded-lg"
                  unoptimized
                />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Bonus', value: editorial.bonus },
                    { label: 'Avg RTP', value: editorial.rtp },
                    { label: 'Games', value: '4,000+' },
                    { label: 'Payout', value: 'Under 2h' },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(240,235,227,0.04)', border: '1px solid rgba(240,235,227,0.06)' }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(240,235,227,0.4)' }}>{label}</p>
                      <p className="text-sm font-bold text-off-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20" style={{ background: '#16003E' }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-3">Our methodology</p>
              <h2
                className="font-bold"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
              >
                Why 50,000 Players Trust iGamingHub
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 100}>
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background: 'rgba(59,31,10,0.3)',
                    border: '1px solid rgba(240,235,227,0.06)',
                  }}
                >
                  <p
                    className="font-bold mb-2"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#00B4D8', letterSpacing: '-0.03em', textShadow: '0 0 30px rgba(0,180,216,0.35)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'rgba(240,235,227,0.55)' }}>{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={200}>
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
              {[
                { title: '50-Point Audits', body: 'Every casino is scored across five categories: bonuses, games, payments, support, and mobile. No shortcuts.' },
                { title: 'No Paid Rankings', body: 'We accept no payment for placement. Rankings reflect genuine expert evaluation, updated monthly.' },
                { title: 'Real Accounts', body: 'Our analysts open real accounts with real money, testing every claim before any review is published.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-xl p-5"
                  style={{ background: 'rgba(0,180,216,0.05)', border: '1px solid rgba(0,180,216,0.12)' }}
                >
                  <h3 className="font-semibold text-gas-blue mb-2">{item.title}</h3>
                  <p style={{ color: 'rgba(240,235,227,0.6)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Latest Reviews Feed */}
      <section className="py-20" style={{ background: '#0F0028' }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-2">Latest additions</p>
                <h2
                  className="font-bold"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
                >
                  Recently Reviewed
                </h2>
              </div>
              <Link href="/reviews/" className="hidden sm:block text-sm font-semibold hover:text-gas-blue transition-colors" style={{ color: 'rgba(240,235,227,0.5)' }}>
                All reviews
              </Link>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-5">
            {casinos.slice(0, 3).map((casino, i) => (
              <FadeUp key={casino.slug} delay={i * 80}>
                <CasinoCard casino={casino} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20" style={{ background: '#16003E' }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-2">Strategy & guides</p>
                <h2
                  className="font-bold"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
                >
                  From the Blog
                </h2>
              </div>
              <Link href="/blog/" className="hidden sm:block text-sm font-semibold hover:text-gas-blue transition-colors" style={{ color: 'rgba(240,235,227,0.5)' }}>
                All articles
              </Link>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 80}>
                <article
                  className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: 'rgba(59,31,10,0.35)',
                    border: '1px solid rgba(240,235,227,0.06)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-semibold"
                      style={{ background: 'rgba(0,180,216,0.1)', color: '#00B4D8' }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(240,235,227,0.35)' }}>{post.readTime}</span>
                  </div>
                  <h3
                    className="font-bold text-off-white leading-snug group-hover:text-gas-blue transition-colors duration-150"
                    style={{ fontSize: '1.05rem' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(240,235,227,0.6)' }}>
                    {post.excerpt.slice(0, 120)}...
                  </p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-sm font-semibold text-gas-blue hover:underline"
                  >
                    Read article
                  </Link>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: '#00B4D8' }}
      >
        <div className="mx-auto max-w-2xl px-6 text-center relative z-10">
          <h2
            className="font-bold mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#16003E', letterSpacing: '-0.02em' }}
          >
            Stay Ahead of the Game
          </h2>
          <p className="mb-8 font-medium" style={{ color: 'rgba(45,10,107,0.75)' }}>
            New casino reviews, exclusive bonus alerts, and strategy guides. No spam.
          </p>
          <div className="relative">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}
