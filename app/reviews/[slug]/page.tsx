import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { casinos, getCasinoBySlug } from '@/content/casinos'
import StarRating from '@/components/StarRating'
import RatingBar from '@/components/RatingBar'
import FAQAccordion from '@/components/FAQAccordion'
import SchemaScript from '@/components/SchemaScript'

export function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const casino = getCasinoBySlug(slug)
  if (!casino) return {}
  return {
    title: `${casino.name} Review ${new Date().getFullYear()} — Bonus, Games & Verdict`,
    description: `Expert review of ${casino.name}. Rating: ${casino.rating}/5. Bonus: ${casino.bonus}. Full analysis of games, payments, and support.`,
    alternates: { canonical: `https://igaminghub.com/reviews/${slug}/` },
    openGraph: {
      title: `${casino.name} Review | iGamingHub`,
      description: `Rating ${casino.rating}/5 — ${casino.bonus}`,
      url: `https://igaminghub.com/reviews/${slug}/`,
      images: [{ url: '/og/default.png', width: 1200, height: 630 }],
    },
  }
}

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'bonuses', label: 'Bonuses' },
  { id: 'games', label: 'Game Library' },
  { id: 'payments', label: 'Payments' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'support', label: 'Support' },
  { id: 'verdict', label: 'Verdict' },
  { id: 'faq', label: 'FAQ' },
]

export default async function CasinoReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const casino = getCasinoBySlug(slug)
  if (!casino) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://igaminghub.com/' },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://igaminghub.com/reviews/' },
      { '@type': 'ListItem', position: 3, name: casino.name, item: `https://igaminghub.com/reviews/${slug}/` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: casino.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: casino.author,
    jobTitle: casino.authorTitle,
    url: 'https://igaminghub.com/about/',
  }

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={authorSchema} />

      <div className="pt-24 pb-20 min-h-screen" style={{ background: '#16003E' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 mb-8">
          <ol className="flex items-center gap-2 text-xs" style={{ color: 'rgba(240,235,227,0.4)' }}>
            <li><Link href="/" className="hover:text-gas-blue transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/reviews/" className="hover:text-gas-blue transition-colors">Reviews</Link></li>
            <li aria-hidden="true">/</li>
            <li style={{ color: '#F0EBE3' }}>{casino.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header
          className="relative py-16 mb-12 overflow-hidden grain"
          style={{ background: '#1D0055', borderBottom: '1px solid rgba(0,180,216,0.1)' }}
        >
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center gap-8">
            <Image
              src={casino.logo}
              alt={`${casino.name} logo`}
              width={180}
              height={90}
              className="rounded-xl"
              unoptimized
            />
            <div className="flex-1">
              <h1
                className="font-bold mb-3"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
              >
                {casino.name} Review
              </h1>
              <StarRating rating={casino.rating} size="lg" />
              <p className="mt-3 text-sm" style={{ color: 'rgba(240,235,227,0.5)' }}>
                Reviewed by <span className="text-off-white font-medium">{casino.author}</span>{' '}
                ({casino.authorTitle}) — Updated{' '}
                <time dateTime={casino.datePublished}>
                  {new Date(casino.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Main Content */}
            <article>
              {/* Pros/Cons */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div
                  className="rounded-2xl p-6"
                  style={{ background: 'rgba(0,180,216,0.06)', border: '1px solid rgba(0,180,216,0.2)' }}
                >
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#00B4D8' }}>Pros</h2>
                  <ul className="flex flex-col gap-2">
                    {casino.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-off-white">
                        <span className="text-gas-blue font-bold mt-0.5 flex-shrink-0">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}
                >
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#f87171' }}>Cons</h2>
                  <ul className="flex flex-col gap-2">
                    {casino.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-off-white">
                        <span style={{ color: '#f87171' }} className="font-bold mt-0.5 flex-shrink-0">-</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sections */}
              <div className="prose-casino">
                <section id="overview">
                  <h2>Overview</h2>
                  <p>{casino.overview}</p>
                </section>

                <section id="bonuses">
                  <h2>Bonuses & Promotions</h2>
                  <p>{casino.bonusDetails}</p>
                </section>

                <section id="games">
                  <h2>Game Library</h2>
                  <p>{casino.gameLibrary}</p>
                </section>

                <section id="payments">
                  <h2>Payment Methods</h2>
                  <p>{casino.paymentMethods}</p>
                </section>

                <section id="mobile">
                  <h2>Mobile Experience</h2>
                  <p>{casino.mobileExperience}</p>
                </section>

                <section id="support">
                  <h2>Customer Support</h2>
                  <p>{casino.customerSupport}</p>
                </section>

                <section id="verdict">
                  <h2>Verdict</h2>
                  <p>{casino.verdict}</p>
                </section>
              </div>

              {/* Rating Breakdown */}
              <div
                className="mt-12 rounded-2xl p-8"
                style={{ background: 'rgba(59,31,10,0.4)', border: '1px solid rgba(240,235,227,0.06)' }}
              >
                <h2
                  className="font-bold mb-6 text-off-white"
                  style={{ fontSize: '1.25rem' }}
                >
                  Rating Breakdown
                </h2>
                <div className="flex flex-col gap-5">
                  {Object.entries(casino.ratingBreakdown).map(([key, val]) => (
                    <RatingBar
                      key={key}
                      label={key.charAt(0).toUpperCase() + key.slice(1)}
                      value={val}
                    />
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2
                  className="font-bold mb-6"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
                >
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={casino.faqs} />
              </section>
            </article>

            {/* Sticky Sidebar */}
            <aside>
              <div
                className="sticky top-28 rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(59,31,10,0.5)',
                  border: '1px solid rgba(0,180,216,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="p-6 border-b" style={{ borderColor: 'rgba(240,235,227,0.06)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(240,235,227,0.4)' }}>Quick Verdict</p>
                  <StarRating rating={casino.rating} size="md" />
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.7)' }}>
                    {casino.verdict.slice(0, 120)}...
                  </p>
                </div>
                <div className="p-6 border-b" style={{ borderColor: 'rgba(240,235,227,0.06)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(240,235,227,0.4)' }}>Welcome Bonus</p>
                  <p className="font-bold text-off-white text-sm">{casino.bonus}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(240,235,227,0.4)' }}>Terms apply. 18+</p>
                </div>
                <div className="p-6">
                  <a
                    href="#"
                    className="block w-full rounded-xl py-3.5 text-center font-bold text-deep-purple transition-all duration-200 hover:shadow-glow-blue"
                    style={{ background: '#00B4D8' }}
                    rel="nofollow noopener noreferrer"
                  >
                    Visit Casino
                  </a>
                  <p className="text-center text-xs mt-3" style={{ color: 'rgba(240,235,227,0.3)' }}>
                    New players only. T&Cs apply. 18+.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
