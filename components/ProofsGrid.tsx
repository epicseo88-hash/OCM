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
            className="rounded-xl overflow-hidden flex flex-col"
            style={{
              background: 'var(--card)',
              border: '1px solid rgba(0,180,216,0.12)',
            }}
          >
            {/* Proof image */}
            <div className="relative w-full aspect-square md:aspect-[4/3]">
              <Image
                src={proof.image}
                alt={proof.caption}
                fill
                className="object-cover"
              />
            </div>

            {/* Card body */}
            <div className="p-4 flex flex-col gap-3 flex-1">
              <p className="font-semibold text-sm leading-snug" style={{ color: 'var(--text)' }}>
                {proof.caption}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-base font-bold" style={{ color: 'var(--accent)' }}>
                  {proof.amount}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,180,216,0.1)', color: 'var(--text-muted)' }}>
                  {proof.date}
                </span>
              </div>

              {/* CTA button */}
              {proof.ctaUrl && (
                <a
                  href={proof.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full rounded-lg py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #7c3aed 0%, #00b4d8 100%)',
                    color: '#fff',
                    letterSpacing: '0.02em',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Play at EpicWin
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
