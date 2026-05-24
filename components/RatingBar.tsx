interface RatingBarProps {
  label: string
  value: number
  max?: number
}

export default function RatingBar({ label, value, max = 5 }: RatingBarProps) {
  const pct = (value / max) * 100

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-off-white">{label}</span>
        <span className="text-sm font-semibold text-gas-blue">{value.toFixed(1)}</span>
      </div>
      <div
        className="h-2 w-full rounded-full overflow-hidden"
        style={{ background: '#3B1F0A' }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={`${label}: ${value} out of ${max}`}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: '#00B4D8',
            boxShadow: '0 0 8px rgba(0,180,216,0.5)',
          }}
        />
      </div>
    </div>
  )
}
