export interface FAQ {
  question: string
  answer: string
}

export interface Casino {
  slug: string
  name: string
  logo: string
  rating: number
  bonus: string
  rtp: string
  pros: string[]
  cons: string[]
  faqs: FAQ[]
  fullReview: string
  author: string
  authorTitle: string
  datePublished: string
  overview: string
  bonusDetails: string
  gameLibrary: string
  paymentMethods: string
  mobileExperience: string
  customerSupport: string
  verdict: string
  ratingBreakdown: {
    bonuses: number
    games: number
    payments: number
    support: number
    mobile: number
  }
  gameTypes: string[]
}

export const casinos: Casino[] = [
  {
    slug: 'royal-edge-casino',
    name: 'Royal Edge Casino',
    logo: '/logos/royal-edge.svg',
    rating: 4.8,
    bonus: '100% up to $1,000 + 200 Free Spins',
    rtp: '97.2%',
    pros: [
      'Exceptional live dealer selection with 500+ tables',
      'Lightning-fast withdrawals — under 2 hours for crypto',
      'Provably fair games with blockchain verification',
      'Dedicated VIP concierge available 24/7',
    ],
    cons: ['US players restricted', 'Bonus wagering requirements of 35x'],
    faqs: [
      { question: 'Is Royal Edge Casino licensed?', answer: 'Yes, Royal Edge Casino holds a full gaming license from the Malta Gaming Authority (MGA) and the UK Gambling Commission.' },
      { question: 'How long do withdrawals take at Royal Edge Casino?', answer: 'Cryptocurrency withdrawals are processed within 2 hours. E-wallet withdrawals take 24 hours. Bank transfers take 3-5 business days.' },
      { question: 'What is the minimum deposit at Royal Edge Casino?', answer: 'The minimum deposit is $20 for most payment methods. Cryptocurrency deposits have no minimum.' },
      { question: 'Does Royal Edge Casino offer a mobile app?', answer: 'Yes, native apps are available for both iOS and Android, offering the full casino experience including live dealer games.' },
    ],
    fullReview: 'Royal Edge Casino stands as one of the finest online gaming destinations available today. Founded in 2018, it has rapidly climbed the ranks to become a top-tier choice for serious players worldwide.',
    author: 'James Thornton',
    authorTitle: 'Senior Casino Analyst',
    datePublished: '2025-03-15',
    overview: 'Royal Edge Casino launched in 2018 under the umbrella of Prestige Gaming Group, quickly establishing itself as a premium destination for high-stakes players.',
    bonusDetails: 'New players receive a 100% match bonus up to $1,000 on their first deposit, paired with 200 free spins distributed across five days. The 35x wagering requirement is standard for the industry.',
    gameLibrary: "With over 4,000 titles from providers including NetEnt, Microgaming, Evolution Gaming, Pragmatic Play, and Play'n GO, the library is exceptional.",
    paymentMethods: 'Royal Edge accepts Visa, Mastercard, Skrill, Neteller, PayPal, Paysafecard, and 15 cryptocurrencies including Bitcoin, Ethereum, and Litecoin.',
    mobileExperience: 'The native iOS and Android apps are outstanding — smooth, fast, and feature-complete.',
    customerSupport: '24/7 live chat with average response times under 90 seconds. Phone support and dedicated account managers are available for VIP players.',
    verdict: 'Royal Edge Casino earns its place at the top of our rankings through consistency: fast payouts, a massive game library, and genuine commitment to player welfare.',
    ratingBreakdown: { bonuses: 4.7, games: 4.9, payments: 4.8, support: 4.8, mobile: 4.7 },
    gameTypes: ['Slots', 'Live Casino', 'Poker'],
  },
  {
    slug: 'neon-vault',
    name: 'Neon Vault',
    logo: '/logos/neon-vault.svg',
    rating: 4.6,
    bonus: '$2,000 Welcome Package + 300 Free Spins',
    rtp: '96.8%',
    pros: [
      'Industry-leading $2,000 welcome package',
      'Exclusive crypto-native features and NFT rewards',
      'Over 6,000 games — largest library in our index',
      'Instant play with no download required',
    ],
    cons: ['Live chat can be slow during peak hours', 'Some game providers geo-restricted'],
    faqs: [
      { question: 'Is Neon Vault a crypto casino?', answer: 'While Neon Vault accepts traditional payment methods, it was built crypto-first. It supports 20+ cryptocurrencies and offers unique NFT-based loyalty rewards.' },
      { question: 'What is the Neon Vault wagering requirement?', answer: 'The welcome bonus carries a 40x wagering requirement. Free spins winnings have a 20x requirement.' },
      { question: 'How many games does Neon Vault have?', answer: 'Neon Vault hosts over 6,000 games from 80+ providers.' },
    ],
    fullReview: 'Neon Vault redefines what a modern online casino looks like. Built from the ground up with Web3 principles, it offers a gaming experience that bridges traditional casino excellence with blockchain innovation.',
    author: 'Sarah Chen',
    authorTitle: 'Crypto Gaming Specialist',
    datePublished: '2025-02-20',
    overview: "Neon Vault emerged in 2021 as the industry's most ambitious crypto-native casino project. Licensed in Curacao, it operates with radical transparency.",
    bonusDetails: 'The $2,000 welcome package is structured across four deposits. The 300 free spins are valid on exclusive slot titles. Players earn NVLT tokens redeemable for cash, bonuses, or NFT collectibles.',
    gameLibrary: 'Six thousand titles spanning classic slots, video slots, progressive jackpots, live dealer games, virtual sports, and eSports betting.',
    paymentMethods: 'Full crypto suite: BTC, ETH, BNB, SOL, USDT, USDC and 15 others. Traditional methods include Visa, Mastercard, Skrill, and Neteller.',
    mobileExperience: 'Progressive web app (PWA) design means no download required. The mobile experience is exceptional, optimized for both iOS and Android browsers.',
    customerSupport: 'Live chat, email, and a comprehensive Discord community with direct developer access.',
    verdict: 'Neon Vault is the future of online casino gaming. The sheer size of the game library and the innovative loyalty system place it in a class of its own.',
    ratingBreakdown: { bonuses: 4.8, games: 5.0, payments: 4.6, support: 4.3, mobile: 4.5 },
    gameTypes: ['Slots', 'Crypto', 'Live Casino'],
  },
  {
    slug: 'apex-live',
    name: 'Apex Live',
    logo: '/logos/apex-live.svg',
    rating: 4.7,
    bonus: '150% up to $500 on First Deposit',
    rtp: '97.5%',
    pros: [
      'Best live dealer experience in the industry',
      'Highest table limits — up to $500,000 per hand',
      'Exclusive Apex Live original game shows',
      'Real-time statistics and betting analytics',
    ],
    cons: ['Slots library smaller than competitors', 'Minimum deposit $50'],
    faqs: [
      { question: 'What live casino games does Apex Live offer?', answer: 'Apex Live offers 800+ live tables including Baccarat, Roulette, Blackjack, Poker, Craps, and 30+ exclusive game shows.' },
      { question: 'What are the table limits at Apex Live?', answer: 'Standard tables range from $1 to $10,000 per hand. VIP rooms have limits from $100 to $500,000.' },
    ],
    fullReview: 'Apex Live was built by live casino veterans who understood that the market deserved something better.',
    author: 'Marcus Webb',
    authorTitle: 'Live Casino Editor',
    datePublished: '2025-04-01',
    overview: "Apex Live launched in 2020 with a single mission: to create the world's finest live casino experience.",
    bonusDetails: '150% first deposit bonus up to $500 with a 30x wagering requirement. Weekly live cashback of 10% on losses, uncapped.',
    gameLibrary: '1,200 slots plus 800+ live tables. Proprietary game shows attract tens of thousands of simultaneous players.',
    paymentMethods: 'Visa, Mastercard, American Express, Skrill, Neteller, Trustly, and crypto (BTC, ETH, LTC).',
    mobileExperience: "The mobile live casino experience is Apex's crown jewel. Stream quality adapts to connection speed while maintaining visual fidelity.",
    customerSupport: '24/7 multilingual support in 15 languages. Average live chat response: 45 seconds.',
    verdict: 'If live casino is your primary game, Apex Live has no equal.',
    ratingBreakdown: { bonuses: 4.6, games: 4.5, payments: 4.8, support: 4.9, mobile: 4.8 },
    gameTypes: ['Live Casino', 'VIP'],
  },
  {
    slug: 'golden-atlas',
    name: 'Golden Atlas',
    logo: '/logos/golden-atlas.svg',
    rating: 4.5,
    bonus: '$500 Welcome Bonus + 50 Free Spins',
    rtp: '96.5%',
    pros: [
      'Outstanding sportsbook integrated with casino',
      'Best in-play betting interface in the market',
      'Same-wallet for casino and sports',
      'Competitive odds across 40+ sports',
    ],
    cons: ['Casino game selection average', 'Welcome bonus split between casino and sports'],
    faqs: [
      { question: 'Does Golden Atlas offer sports betting?', answer: 'Yes, Golden Atlas features a fully integrated sportsbook covering 40+ sports with competitive odds and live in-play betting.' },
      { question: 'What sports can I bet on at Golden Atlas?', answer: 'Football, basketball, tennis, cricket, eSports, MMA, boxing, golf, rugby, and 30+ additional sports.' },
    ],
    fullReview: 'Golden Atlas is the definitive choice for players who want both a quality casino and a world-class sportsbook under one roof.',
    author: 'James Thornton',
    authorTitle: 'Senior Casino Analyst',
    datePublished: '2025-01-10',
    overview: 'Golden Atlas operates as a true hybrid casino-sportsbook, refusing to compromise either vertical.',
    bonusDetails: 'The $500 welcome package is split: $250 casino match and $250 in sports free bets, each carrying a 25x wagering requirement.',
    gameLibrary: '2,800 casino games from Pragmatic Play, Red Tiger, and IGT. The sportsbook covers 40+ sports.',
    paymentMethods: 'Visa, Mastercard, PayPal, Skrill, Neteller, bank transfer, and crypto.',
    mobileExperience: 'Native apps for iOS and Android with seamless switching between sportsbook and casino.',
    customerSupport: 'Live chat 24/7, email, and phone. Average response under 2 minutes.',
    verdict: 'Golden Atlas delivers the best combined casino-sportsbook experience in our review index.',
    ratingBreakdown: { bonuses: 4.4, games: 4.3, payments: 4.6, support: 4.5, mobile: 4.7 },
    gameTypes: ['Sports Betting', 'Slots'],
  },
  {
    slug: 'crimson-poker-club',
    name: 'Crimson Poker Club',
    logo: '/logos/crimson-poker.svg',
    rating: 4.4,
    bonus: '$1,500 Poker Welcome Package',
    rtp: '98.1%',
    pros: [
      'Largest online poker network with 50,000+ daily players',
      'Fastest-growing tournament schedule',
      'Rake-back up to 40% for regular players',
      'Anonymous tables to prevent HUD abuse',
    ],
    cons: ['Casino selection limited', 'Software only available via download'],
    faqs: [
      { question: 'What poker variants does Crimson Poker Club offer?', answer: "Texas Hold'em, Omaha Hi-Lo, 7-Card Stud, Razz, Badugi, Mixed Games (HORSE), and Fast Fold poker." },
      { question: 'What are the rake rates at Crimson Poker Club?', answer: 'Rake is 5% capped at $3 for cash games. Tournament rake is 10%. With rake-back, effective rates drop significantly.' },
    ],
    fullReview: "Crimson Poker Club is the serious player's choice for online poker.",
    author: 'Sarah Chen',
    authorTitle: 'Crypto Gaming Specialist',
    datePublished: '2024-12-05',
    overview: "Crimson Poker Club founded in 2015 has grown into one of the world's largest independent poker networks.",
    bonusDetails: 'The $1,500 poker welcome package is released incrementally as earned points through play. The ongoing rake-back program is best-in-class at up to 40% for elite players.',
    gameLibrary: 'Pure poker focus: cash games from $0.01/$0.02 to $100/$200, sit-and-go tournaments, multi-table tournaments with guaranteed prize pools up to $2 million weekly.',
    paymentMethods: 'Skrill, Neteller, Visa, Mastercard, and Bitcoin.',
    mobileExperience: 'Mobile poker client available for iOS and Android. Supports cash games and tournaments with full hand history and statistics.',
    customerSupport: 'Live chat and email. Poker-specific support staff with deep product knowledge.',
    verdict: 'For dedicated poker players, Crimson Poker Club is unmatched.',
    ratingBreakdown: { bonuses: 4.5, games: 4.8, payments: 4.3, support: 4.2, mobile: 4.3 },
    gameTypes: ['Poker'],
  },
  {
    slug: 'stellar-spins',
    name: 'Stellar Spins',
    logo: '/logos/stellar-spins.svg',
    rating: 4.3,
    bonus: '200 Free Spins No Deposit Required',
    rtp: '96.9%',
    pros: [
      'No deposit bonus — 200 free spins on registration',
      'Exclusive slot titles not found elsewhere',
      'Mega-jackpot network with $50M+ pending prize',
      'Daily slot tournaments with real cash prizes',
    ],
    cons: ['Limited live casino selection', 'Slow verification process'],
    faqs: [
      { question: 'How does the no deposit bonus work at Stellar Spins?', answer: 'Register an account, verify your email, and 200 free spins are credited instantly. Winnings are subject to a 30x wagering requirement.' },
      { question: 'What is the Stellar Jackpot prize?', answer: 'The Stellar Jackpot is a network progressive jackpot currently standing at over $50 million.' },
    ],
    fullReview: 'Stellar Spins was purpose-built for slots enthusiasts, and it shows.',
    author: 'Marcus Webb',
    authorTitle: 'Live Casino Editor',
    datePublished: '2025-05-01',
    overview: 'Stellar Spins launched in 2022 focusing exclusively on the slots vertical, aggregating content from 100+ providers.',
    bonusDetails: 'The 200 free spins no-deposit bonus is exceptional market entry. The full welcome package adds a 200% match on first deposit up to $400.',
    gameLibrary: '8,000+ slot titles covering every genre: classic 3-reel, video slots, Megaways, cluster pays, progressive jackpots, and 200+ exclusive titles.',
    paymentMethods: 'Standard suite: Visa, Mastercard, Skrill, Neteller, Trustly, Paysafecard, and crypto.',
    mobileExperience: 'Mobile-first design with all 8,000+ slots playable on any device.',
    customerSupport: 'Live chat 24/7. Response times average 2 minutes.',
    verdict: 'Stellar Spins is the definitive slots casino.',
    ratingBreakdown: { bonuses: 4.7, games: 4.6, payments: 4.2, support: 4.1, mobile: 4.4 },
    gameTypes: ['Slots'],
  },
]

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug)
}