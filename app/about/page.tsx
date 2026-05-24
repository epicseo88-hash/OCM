import type { Metadata } from 'next'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'About iGamingHub — Our Story & Methodology',
  description: 'iGamingHub is an independent casino review platform run by industry veterans since 2015. Learn about our review methodology, our team, and our commitment to unbiased analysis.',
  alternates: { canonical: 'https://igaminghub.com/about/' },
  openGraph: {
    title: 'About iGamingHub | Independent Casino Reviews Since 2015',
    description: 'Learn about our team, methodology, and commitment to independent reviews.',
    url: 'https://igaminghub.com/about/',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
}

const TEAM = [
  {
    name: 'James Thornton',
    title: 'Senior Casino Analyst',
    bio: '12 years in iGaming, formerly with PokerStars and Betfair. James has personally reviewed over 300 online casinos, testing every payment method, bonus term, and RNG certification claim.',
    initials: 'JT',
  },
  {
    name: 'Sarah Chen',
    title: 'Crypto Gaming Specialist',
    bio: 'Former quantitative trader turned crypto casino expert. Sarah brings a data-first approach to every review, with particular expertise in provably fair verification and DeFi gaming protocols.',
    initials: 'SC',
  },
  {
    name: 'Marcus Webb',
    title: 'Live Casino Editor',
    bio: '8 years working in live dealer production before joining iGamingHub. Marcus evaluates streaming quality, dealer professionalism, and game fairness from an insider\'s perspective no other review site can match.',
    initials: 'MW',
  },
]

const METHODOLOGY = [
  {
    step: '01',
    title: 'Account Creation',
    desc: 'We register a real account with real personal information. We test the KYC process, initial deposit experience, and welcome offer fulfillment exactly as any player would.',
  },
  {
    step: '02',
    title: 'Bonus Audit',
    desc: 'We read every line of T&Cs. We test wagering requirements, maximum bet rules, time limits, and game restrictions by actually playing through bonuses with real money.',
  },
  {
    step: '03',
    title: 'Game Library Analysis',
    desc: 'We catalog provider selection, RTP verification, game categories, and load times. We request and verify RTP certificates from independent testing labs for our top-rated casinos.',
  },
  {
    step: '04',
    title: 'Payment Testing',
    desc: 'We make multiple deposits and withdrawals using each available method. We time every transaction from submission to funds receipt.',
  },
  {
    step: '05',
    title: 'Support Evaluation',
    desc: 'We contact customer support 15+ times across different channels and hours. We score agents on accuracy, response time, and willingness to escalate complex issues.',
  },
  {
    step: '06',
    title: 'Scoring & Publication',
    desc: 'Each category receives a weighted score. Reviews are peer-reviewed by a second analyst before publication. Scores are revisited quarterly.',
  },
]

const TRUST_SIGNALS = [
  { value: '200+', label: 'Casinos Reviewed' },
  { value: 'Zero', label: 'Paid Placements' },
  { value: '10 yrs', label: 'Industry Experience' },
  { value: 'Real', label: 'Money Testing' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ background: '#16003E' }}>
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden grain mb-16"
        style={{ background: '#1D0055', borderBottom: '1px solid rgba(0,180,216,0.1)' }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-4">Independent since 2015</p>
            <h1
              className="font-bold mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#F0EBE3', letterSpacing: '-0.03em' }}
            >
              No Agenda. No Compromise.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(240,235,227,0.65)' }}>
              iGamingHub was founded on a single principle: players deserve reviews that tell the truth, including when the truth is unflattering. We accept no payment for placement. We test with real money. We publish what we find.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        {/* Trust Stats */}
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {TRUST_SIGNALS.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl p-6 text-center"
                style={{ background: 'rgba(59,31,10,0.3)', border: '1px solid rgba(240,235,227,0.06)' }}
              >
                <p
                  className="font-bold mb-1"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#00B4D8', letterSpacing: '-0.02em' }}
                >
                  {t.value}
                </p>
                <p className="text-sm font-medium" style={{ color: 'rgba(240,235,227,0.5)' }}>{t.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Mission */}
        <FadeUp>
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-4">Our mission</p>
                <h2
                  className="font-bold mb-5"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
                >
                  Giving Players the Information They Deserve
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(240,235,227,0.7)' }}>
                  The online casino review space is polluted with affiliate sites that rank casinos based on commission rates rather than quality. We built iGamingHub as the antidote: a platform where the rankings reflect actual performance, tested by people who have worked inside the industry.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(240,235,227,0.7)' }}>
                  We do earn affiliate revenue when readers visit casinos from our links, but this never influences rankings. Our scoring methodology is public, our review process is documented, and we will publish a negative review of a casino regardless of commercial relationship.
                </p>
              </div>
              <div
                className="rounded-2xl p-8"
                style={{ background: 'rgba(0,180,216,0.05)', border: '1px solid rgba(0,180,216,0.15)' }}
              >
                <h3 className="font-semibold text-gas-blue mb-4 text-lg">Our Commitments</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'No casino pays to be listed or ranked higher',
                    'All reviews test with real player accounts and real money',
                    'Ratings are updated at minimum quarterly',
                    'Negative findings are published, not suppressed',
                    'We disclose affiliate relationships in our terms',
                    'We recommend BeGambleAware resources on every page',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-off-white">
                      <span className="text-gas-blue mt-0.5 flex-shrink-0 font-bold">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Team */}
        <section className="mb-20">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-3">The analysts</p>
              <h2
                className="font-bold"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
              >
                People Who Know the Industry
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <FadeUp key={member.name} delay={i * 100}>
                <div
                  className="rounded-2xl p-7"
                  style={{ background: 'rgba(59,31,10,0.4)', border: '1px solid rgba(240,235,227,0.06)' }}
                >
                  <div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center text-lg font-bold mb-5"
                    style={{ background: 'rgba(0,180,216,0.12)', color: '#00B4D8', border: '1px solid rgba(0,180,216,0.2)' }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-off-white text-lg mb-0.5">{member.name}</h3>
                  <p className="text-xs font-semibold mb-4" style={{ color: '#00B4D8' }}>{member.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.65)' }}>{member.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section>
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gas-blue mb-3">How we work</p>
              <h2
                className="font-bold"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#F0EBE3', letterSpacing: '-0.02em' }}
              >
                The Review Methodology
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {METHODOLOGY.map((step, i) => (
              <FadeUp key={step.step} delay={i * 60}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: 'rgba(59,31,10,0.3)', border: '1px solid rgba(240,235,227,0.06)' }}
                >
                  <p
                    className="text-3xl font-bold mb-3"
                    style={{ color: 'rgba(0,180,216,0.25)', letterSpacing: '-0.03em' }}
                  >
                    {step.step}
                  </p>
                  <h3 className="font-semibold text-off-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.6)' }}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
