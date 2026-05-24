interface StarRatingProps {
  rating: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({ rating, max = 5, size = 'md' }: StarRatingProps) {
  const sizes = { sm: 'text-sm', md: 'text-base', lg: 'text-2xl' }

  return (
    <div className={`flex items-center gap-0.5 ${sizes[size]}`} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating)
        const partial = !filled && i < rating
        const pct = partial ? Math.round((rating - Math.floor(rating)) * 100) : 0

        return (
          <span key={i} className="relative inline-block" style={{ color: '#C9A84C' }}>
            {partial ? (
              <>
                <span className="text-rich-brown opacity-40">&#9733;</span>
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${pct}%` }}
                >
                  &#9733;
                </span>
              </>
            ) : (
              <span style={{ color: filled ? '#C9A84C' : undefined, opacity: filled ? 1 : 0.3 }}>
                &#9733;
              </span>
            )}
          </span>
        )
      })}
      <span className="ml-1 font-semibold" style={{ color: '#C9A84C' }}>
        {rating.toFixed(1)}
      </span>
    </div>
  )
}
