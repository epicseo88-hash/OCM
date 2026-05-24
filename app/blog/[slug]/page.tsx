import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPostBySlug } from '@/content/posts'
import FAQAccordion from '@/components/FAQAccordion'
import SchemaScript from '@/components/SchemaScript'
import BlogContent from './BlogContent'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://edgebet.com/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://edgebet.com/blog/${slug}/`,
      type: 'article',
      authors: [post.author],
      publishedTime: post.datePublished,
      images: [{ url: '/og/default.png', width: 1200, height: 630 }],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: ['/og/default.png'],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://edgebet.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://edgebet.com/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://edgebet.com/blog/${slug}/` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: post.author,
    jobTitle: post.authorTitle,
    url: 'https://edgebet.com/about/',
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'EdgeBet', url: 'https://edgebet.com' },
  }

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={authorSchema} />
      <SchemaScript schema={articleSchema} />

      <div className="pt-24 pb-20 min-h-screen" style={{ background: '#2D0A6B' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 mb-8">
          <ol className="flex items-center gap-2 text-xs" style={{ color: 'rgba(240,235,227,0.4)' }}>
            <li><Link href="/" className="hover:text-gas-blue transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog/" className="hover:text-gas-blue transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="truncate max-w-[200px]" style={{ color: '#F0EBE3' }}>{post.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header
          className="py-14 mb-12 relative overflow-hidden grain"
          style={{ background: '#3B1F0A', borderBottom: '1px solid rgba(0,180,216,0.1)' }}
        >
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="rounded-full px-3 py-0.5 text-xs font-semibold"
                style={{ background: 'rgba(0,180,216,0.12)', color: '#00B4D8', border: '1px solid rgba(0,180,216,0.25)' }}
              >
                {post.category}
              </span>
              <span className="text-xs" style={{ color: 'rgba(240,235,227,0.4)' }}>{post.readTime}</span>
            </div>
            <h1
              className="font-bold mb-5 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
            >
              {post.title}
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(240,235,227,0.65)' }}>
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: 'rgba(0,180,216,0.15)', color: '#00B4D8' }}
                aria-hidden="true"
              >
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-off-white">{post.author}</p>
                <p className="text-xs" style={{ color: 'rgba(240,235,227,0.4)' }}>
                  {post.authorTitle} —{' '}
                  <time dateTime={post.datePublished}>
                    {new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6">
          <BlogContent post={post} />

          {/* FAQ */}
          <section className="mt-16 mx-auto max-w-3xl">
            <h2
              className="font-bold mb-6"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
            >
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={post.faqs} />
          </section>
        </div>
      </div>
    </>
  )
}
