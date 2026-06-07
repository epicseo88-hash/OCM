'use client'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  { name: 'EP***88', rating: 5,   comment: 'Won RM8,888 today. Thanks EpicWin!',                         date: '03 Jun 2026' },
  { name: 'JA***21', rating: 5,   comment: 'Tips are super accurate. Withdrew RM2,500 this week.',        date: '03 Jun 2026' },
  { name: 'MI***66', rating: 5,   comment: 'Best platform I have used. Big win every session.',           date: '04 Jun 2026' },
  { name: 'KE***12', rating: 5,   comment: 'Love the tips and how fast the payout is. 10 out of 10.',    date: '04 Jun 2026' },
  { name: 'RM***45', rating: 5,   comment: 'Cuci RM3,200 in one session. Could not believe it.',         date: '04 Jun 2026' },
  { name: 'AH***33', rating: 4.8, comment: 'Daily tips really work. Already withdrew twice this month.', date: '05 Jun 2026' },
  { name: 'ZU***77', rating: 4.7, comment: 'Fast payout every time. Reliable tips. Highly recommend.',   date: '05 Jun 2026' },
  { name: 'FA***19', rating: 4.5, comment: 'Joined 2 weeks ago. Already up RM1,500. Very happy.',        date: '05 Jun 2026' },
  { name: 'HA***55', rating: 4.8, comment: 'Telegram group very active. Tips drop every morning.',       date: '06 Jun 2026' },
  { name: 'NO***28', rating: 4.5, comment: 'Safe, trusted, and legit. The proof screenshots say it all.', date: '06 Jun 2026' },
  { name: 'SY***41', rating: 4.2, comment: 'Best tips channel I have found so far. Keep it up.',         date: '07 Jun 2026' },
  { name: 'AM***63', rating: 4.7, comment: 'Withdrew RM2,100 last night. Real results, real money.',     date: '07 Jun 2026' },
]

const COLORS = ['#7c3aed','#0ea5e9','#10b981','#f59e0b','#ef4444','#8b5cf6','#06b6d4','#f97316','#84cc16','#ec4899','#14b8a6','#a855f7']

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={i <= Math.round(rating) ? '#f59e0b' : '#374151'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span className="text-xs ml-1 font-semibold" style={{ color: '#f59e0b' }}>{rating.toFixed(1)}</span>
    </div>
  )
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const lastRef = useRef(0)
  const total = testimonials.length

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % total), 3500)
    return () => clearInterval(t)
  }, [total])

  useEffect(() => {
    const container = trackRef.current
    if (!container) return
    const cardEl = container.children[current] as HTMLElement
    if (!cardEl) return

    if (current === 0 && lastRef.current === total - 1) {
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = 0
      requestAnimationFrame(() => { container.style.scrollBehavior = 'smooth' })
    } else {
      container.scrollTo({ left: cardEl.offsetLeft, behavior: 'smooth' })
    }
    lastRef.current = current
  }, [current, total])

  return (
    <div
      ref={trackRef}
      className="scrollbar-hide flex gap-3 overflow-x-auto"
      style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' as never }}
    >
      {testimonials.map((t, i) => {
        const color = COLORS[i % COLORS.length]
        return (
          <div
            key={i}
            className="shrink-0 w-[80%] md:w-[31%] rounded-xl p-3 flex flex-col gap-2"
            style={{ scrollSnapAlign: 'start', background: 'var(--card)', border: '1px solid rgba(124,58,237,0.15)' }}
          >
            <div className="flex items-center gap-2">
              <div
                className="rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                style={{ width: 32, height: 32, background: color + '22', color, border: `1.5px solid ${color}44` }}
              >
                {t.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-xs" style={{ color: 'var(--text)' }}>{t.name}</p>
                <Stars rating={t.rating} />
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{t.comment}</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)', opacity: 0.45 }}>{t.date}</p>
          </div>
        )
      })}
    </div>
  )
}
