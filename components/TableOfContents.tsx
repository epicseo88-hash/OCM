'use client'

import { useEffect, useRef, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
          break
        }
      }
    }

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-20% 0% -60% 0%',
      threshold: 0,
    })

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label="Table of contents">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gas-blue">
        Contents
      </p>
      <ul className="flex flex-col gap-1">
        {headings.map(({ id, text, level }) => {
          const active = activeId === id
          return (
            <li key={id} style={{ paddingLeft: level === 3 ? '0.75rem' : '0' }}>
              <a
                href={`#${id}`}
                className="block rounded py-1 px-2 text-sm transition-all duration-150"
                style={{
                  color: active ? '#00B4D8' : 'rgba(240,235,227,0.6)',
                  background: active ? 'rgba(0,180,216,0.08)' : 'transparent',
                  borderLeft: active ? '2px solid #00B4D8' : '2px solid transparent',
                }}
              >
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
