export interface WithdrawalTip {
  title: string
  description: string
}

export interface WinningProof {
  image: string
  caption: string
  amount: string
  date: string
  ctaUrl?: string
}

export const withdrawalTips: WithdrawalTip[] = [
  {
    title: 'Complete KYC Before You Win',
    description: 'Verify your identity before making your first withdrawal request. Most delays happen because KYC documents were not submitted in advance.',
  },
  {
    title: 'Use E-Wallets for Fastest Payouts',
    description: 'Skrill and Neteller typically process within 24 hours. Bank transfers can take 3-5 business days — avoid them if speed matters.',
  },
  {
    title: 'Withdraw in the Same Currency You Deposited',
    description: 'Currency conversion fees can eat into your winnings. Always deposit and withdraw in the same currency to avoid unnecessary charges.',
  },
  {
    title: 'Meet Wagering Requirements First',
    description: 'Bonus funds cannot be withdrawn until wagering requirements are met. Check your bonus terms and track your wagering progress before requesting a withdrawal.',
  },
  {
    title: 'Set a Daily Withdrawal Limit',
    description: 'Protect your winnings by setting a withdrawal limit. This prevents impulsive re-deposits after a big win and keeps your bankroll healthy.',
  },
]

export const winningProofs: WinningProof[] = [
  {
    image: '/proofs/aa.jpeg',
    caption: 'Verified withdrawal processed successfully',
    amount: 'RM 1,900',
    date: '7 Jun 2026',
    ctaUrl: 'https://epicwinslots.com',
  },
]
