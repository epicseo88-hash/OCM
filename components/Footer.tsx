import Link from 'next/link'

const LINKS = {
  Reviews: [
    { href: '/reviews/', label: 'All Casino Reviews' },
    { href: '/reviews/royal-edge-casino/', label: 'Royal Edge Casino' },
    { href: '/reviews/neon-vault/', label: 'Neon Vault' },
    { href: '/reviews/apex-live/', label: 'Apex Live' },
  ],
  Resources: [
    { href: '/blog/', label: 'Strategy Blog' },
    { href: '/blog/how-to-read-rtp-percentages/', label: 'RTP Guide' },
    { href: '/blog/online-casino-bonus-guide/', label: 'Bonus Guide' },
    { href: '/blog/crypto-casino-guide-2025/', label: 'Crypto Casinos' },
  ],
  Company: [
    { href: '/about/', label: 'About iGamingHub' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: '#08001A', borderTop: '1px solid rgba(0,180,216,0.1)' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold mb-3 block"
              style={{ color: '#F0EBE3', letterSpacing: '-0.02em' }}
            >
              iGaming<span style={{ color: '#00B4D8' }}>Hub</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.45)' }}>
              Independent casino reviews since 2015. No sponsored rankings. No hidden agendas.
            </p>
          </div>
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'rgba(240,235,227,0.35)' }}
              >
                {section}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors duration-150 hover:text-gas-blue"
                      style={{ color: 'rgba(240,235,227,0.55)' }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between"
          style={{ borderTop: '1px solid rgba(240,235,227,0.06)' }}
        >
          <p className="text-xs max-w-2xl leading-relaxed" style={{ color: 'rgba(240,235,227,0.3)' }}>
            iGamingHub provides independent reviews and guides for informational purposes only. Gambling involves financial risk.
            Only gamble with money you can afford to lose. Must be 18+ to gamble. If gambling is causing harm, contact{' '}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gas-blue transition-colors"
              style={{ color: 'rgba(240,235,227,0.4)' }}
            >
              BeGambleAware
            </a>
            .
          </p>
          <div
            className="flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold"
            style={{ background: 'rgba(240,235,227,0.08)', color: 'rgba(240,235,227,0.5)', border: '1px solid rgba(240,235,227,0.12)' }}
            aria-label="18 plus — adults only"
          >
            18+
          </div>
        </div>

        <p className="mt-4 text-xs" style={{ color: 'rgba(240,235,227,0.2)' }}>
          © {new Date().getFullYear()} iGamingHub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
