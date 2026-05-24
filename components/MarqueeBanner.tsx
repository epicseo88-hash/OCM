const FEATURED_IN = [
  'Forbes',
  'TechCrunch',
  'The Guardian',
  'Wired',
  'Bloomberg',
  'Financial Times',
  'IGN',
  'Kotaku',
]

export default function MarqueeBanner() {
  return (
    <section
      className="py-10 overflow-hidden relative"
      style={{ borderTop: '1px solid rgba(240,235,227,0.06)', borderBottom: '1px solid rgba(240,235,227,0.06)' }}
      aria-label="As featured in"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-off-white opacity-30 mb-6">
        As Featured In
      </p>
      <div className="flex" aria-hidden="true">
        <ul className="flex min-w-full shrink-0 gap-16 pr-16 animate-marquee items-center list-none m-0 p-0">
          {FEATURED_IN.map((name) => (
            <li
              key={name}
              className="text-xl font-bold tracking-tight opacity-25 hover:opacity-60 transition-opacity whitespace-nowrap"
              style={{ color: '#F0EBE3' }}
            >
              {name}
            </li>
          ))}
        </ul>
        <ul className="flex min-w-full shrink-0 gap-16 pr-16 animate-marquee2 items-center list-none m-0 p-0" aria-hidden="true">
          {FEATURED_IN.map((name) => (
            <li
              key={name + '-2'}
              className="text-xl font-bold tracking-tight opacity-25 whitespace-nowrap"
              style={{ color: '#F0EBE3' }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
