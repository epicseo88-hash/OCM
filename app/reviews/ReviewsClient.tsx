'use client'

import { useState, useMemo } from 'react'
import CasinoCard from '@/components/CasinoCard'
import type { Casino } from '@/content/casinos'

type SortOption = 'rating' | 'bonus' | 'rtp'
type GameFilter = 'All' | 'Slots' | 'Live Casino' | 'Sports Betting' | 'Poker' | 'Crypto' | 'VIP'

const GAME_FILTERS: GameFilter[] = ['All', 'Slots', 'Live Casino', 'Sports Betting', 'Poker', 'Crypto', 'VIP']

interface ReviewsClientProps {
  casinos: Casino[]
}

export default function ReviewsClient({ casinos }: ReviewsClientProps) {
  const [sortBy, setSortBy] = useState<SortOption>('rating')
  const [gameFilter, setGameFilter] = useState<GameFilter>('All')

  const filtered = useMemo(() => {
    let list = [...casinos]
    if (gameFilter !== 'All') {
      list = list.filter((c) => c.gameTypes.includes(gameFilter))
    }
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating)
    if (sortBy === 'rtp') list.sort((a, b) => parseFloat(b.rtp) - parseFloat(a.rtp))
    return list
  }, [casinos, sortBy, gameFilter])

  return (
    <>
      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {GAME_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setGameFilter(f)}
              className="rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150"
              style={{
                background: gameFilter === f ? '#00B4D8' : 'rgba(240,235,227,0.06)',
                color: gameFilter === f ? '#2D0A6B' : 'rgba(240,235,227,0.6)',
                border: gameFilter === f ? '1px solid #00B4D8' : '1px solid rgba(240,235,227,0.08)',
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-xs font-medium" style={{ color: 'rgba(240,235,227,0.5)' }}>
            Sort:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="rounded-lg px-3 py-1.5 text-xs font-semibold outline-none cursor-pointer"
            style={{
              background: 'rgba(29,0,85,0.6)',
              border: '1px solid rgba(240,235,227,0.1)',
              color: '#F0EBE3',
            }}
          >
            <option value="rating">Top Rated</option>
            <option value="rtp">Highest RTP</option>
            <option value="bonus">Best Bonus</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center" style={{ color: 'rgba(240,235,227,0.4)' }}>
          <p className="text-lg font-semibold">No casinos match this filter.</p>
          <button
            type="button"
            onClick={() => setGameFilter('All')}
            className="mt-4 text-gas-blue underline text-sm"
          >
            Clear filter
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((casino, i) => (
            <CasinoCard key={casino.slug} casino={casino} rank={i + 1} />
          ))}
        </div>
      )}
    </>
  )
}
