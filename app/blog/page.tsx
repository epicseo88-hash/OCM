import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/content/posts'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Casino Strategy Blog & Guides',
  description: 'Expert casino strategy guides, RTP analysis, bonus tutorials, and crypto gambling deep-dives from the EdgeBet editorial team.',
  alternates: { canonical: 'https://edgebet.com/blog/' },
  openGraph: {
    title: 'Casino Strategy Blog | EdgeBet',
    description: 'Expert casino strategy guides and deep-dives from the EdgeBet editorial team.',
    url: 'https://edgebet.com/blog/',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ background: '#2D0A6B' }}>
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-3">Strategy & analysis</p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#F0EBE3', letterSpacing: '-0.03em' }}
          >
            The EdgeBet Blog
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed" style={{ color: 'rgba(240,235,227,0.6)' }}>
            Guides, deep-dives, and strategy content from analysts who have worked in the industry for a decade.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <FadeUp key={post.slug} delay={i * 80}>
              <article
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: 'rgba(59,31,10,0.35)',
                  border: '1px solid rgba(240,235,227,0.06)',
                }}
              >
                <div
                  className="h-3 w-full"
                  style={{ background: '#00B4D8', boxShadow: '0 2px 12px rgba(0,180,216,0.3)' }}
                  aria-hidden="true"
                />
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{ background: 'rgba(0,180,216,0.1)', color: '#00B4D8', border: '1px solid rgba(0,180,216,0.2)' }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(240,235,227,0.35)' }}>{post.readTime}</span>
                  </div>
                  <h2
                    className="font-bold text-off-white leading-snug group-hover:text-gas-blue transition-colors duration-150"
                    style={{ fontSize: '1.1rem' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(240,235,227,0.6)' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid rgba(240,235,227,0.06)' }}>
                    <div>
                      <p className="text-xs font-semibold text-off-white">{post.author}</p>
                      <p className="text-xs" style={{ color: 'rgba(240,235,227,0.4)' }}>
                        <time dateTime={post.datePublished}>
                          {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="rounded-lg px-4 py-1.5 text-xs font-bold text-deep-purple transition-all duration-150 hover:shadow-glow-blue-sm"
                      style={{ background: '#00B4D8' }}
                    >
                      Read
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  )
}
