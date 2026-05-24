'use client'

import { useMemo } from 'react'
import TableOfContents from '@/components/TableOfContents'
import type { Post } from '@/content/posts'

interface BlogContentProps {
  post: Post
}

function parseHeadings(content: string) {
  const lines = content.split('\n')
  const headings: { id: string; text: string; level: number }[] = []
  for (const line of lines) {
    const m2 = line.match(/^## (.+)/)
    const m3 = line.match(/^### (.+)/)
    if (m2) {
      const text = m2[1].trim()
      headings.push({ id: slugify(text), text, level: 2 })
    } else if (m3) {
      const text = m3[1].trim()
      headings.push({ id: slugify(text), text, level: 3 })
    }
  }
  return headings
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function renderContent(content: string): string {
  const lines = content.trim().split('\n')
  const out: string[] = []
  let inUl = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      if (inUl) { out.push('</ul>'); inUl = false }
      const text = line.slice(3)
      const id = slugify(text)
      out.push(`<h2 id="${id}">${text}</h2>`)
      continue
    }
    if (line.startsWith('### ')) {
      if (inUl) { out.push('</ul>'); inUl = false }
      const text = line.slice(4)
      const id = slugify(text)
      out.push(`<h3 id="${id}">${text}</h3>`)
      continue
    }
    if (line.startsWith('- ')) {
      if (!inUl) { out.push('<ul>'); inUl = true }
      const text = line.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      out.push(`<li>${text}</li>`)
      continue
    }
    if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
      if (inUl) { out.push('</ul>'); inUl = false }
      continue
    }
    if (line.trim() === '') {
      if (inUl) { out.push('</ul>'); inUl = false }
      continue
    }
    if (inUl) { out.push('</ul>'); inUl = false }
    const text = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    out.push(`<p>${text}</p>`)
  }
  if (inUl) out.push('</ul>')
  return out.join('\n')
}

export default function BlogContent({ post }: BlogContentProps) {
  const headings = useMemo(() => parseHeadings(post.content), [post.content])
  const html = useMemo(() => renderContent(post.content), [post.content])

  return (
    <div className="grid lg:grid-cols-[1fr_260px] gap-12">
      <article
        className="prose-casino min-w-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <aside>
        <div
          className="sticky top-28 rounded-2xl p-5"
          style={{
            background: 'rgba(59,31,10,0.4)',
            border: '1px solid rgba(240,235,227,0.06)',
          }}
        >
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  )
}
