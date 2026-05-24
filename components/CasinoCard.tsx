import Image from 'next/image'
import Link from 'next/link'
import StarRating from './StarRating'
import type { Casino } from '@/content/casinos'

interface CasinoCardProps {
  casino: Casino
  rank?: number
}

export default function CasinoCard({ casino, rank }: CasinoCardProps) {
  return (
    <article
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(29, 0, 85, 0.4)',
        border: '1px solid rgba(0, 180, 216, 0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {rank && (
        <div
          className="absolute top-3 left-3 z-10 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-deep-purple"
          style={{ background: '#C9A84C' }}
        >
          {rank}
        </div>
      )}

      <div className="p-5 flex flex-col gap-4 flex-1">
        <div className="flex items-center gap-3">
          <div
            className="rounded-lg overflow-hidden flex-shrink-0"
            style={{ border: '1px solid rgba(240,235,227,0.1)' }}
          >
            <Image
              src={casino.logo}
              alt={`${casino.name} logo`}
              width={120}
              height={60}
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h3 className="font-bold text-off-white text-lg leading-tight">{casino.name}</h3>
            <StarRating rating={casino.rating} size="sm" />
          </div>
        </div>

        <div
          className="rounded-lg px-3 py-2 text-sm"
          style={{ background: 'rgba(0,180,216,0.08)', border: '1px solid rgba(0,180,216,0.2)' }}
        >
          <span className="text-gas-blue font-semibold">Bonus: </span>
          <span className="text-off-white">{casino.bonus}</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2 py-0.5 text-xs font-semibold"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}
          >
            RTP {casino.rtp}
          </span>
        </div>

        <ul className="flex flex-col gap-1.5">
          {casino.pros.slice(0, 3).map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-off-white opacity-80">
              <span className="text-gas-blue mt-0.5 flex-shrink-0">+</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="p-5 pt-0"
      >
        <Link
          href={`/reviews/${casino.slug}/`}
          className="block w-full rounded-xl py-2.5 text-center text-sm font-semibold text-deep-purple transition-all duration-200 group-hover:shadow-glow-blue"
          style={{ background: '#00B4D8' }}
        >
          Read Review
        </Link>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0,180,216,0.3)' }}
        aria-hidden="true"
      />
    </article>
  )
}
