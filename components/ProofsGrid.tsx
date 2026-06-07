'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { WinningProof } from '@/content/winning-tips'

const DEFAULT_VISIBLE = 3

export default function ProofsGrid({ proofs }: { proofs: WinningProof[] }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? proofs : proofs.slice(0, DEFAULT_VISIBLE)
  const hidden = proofs.length - DEFAULT_VISIBLE

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((proof, i) => (
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

      {!expanded && hidden > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setExpanded(true)}
            className="rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: 'var(--card)', border: '1px solid rgba(0,180,216,0.25)', color: 'var(--text)' }}
          >
            See more ({hidden} more {hidden === 1 ? 'proof' : 'proofs'})
          </button>
        </div>
      )}
    </>
  )
}
