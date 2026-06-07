export interface WithdrawalTip {
  title: string
  description: string
}

export interface WinningProof {
  image: string
  caption: string
  amount: string
  date: string
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
    description: 'Bonus funds cannot be withdrawn until wagering requirements are met. Check your bonus terms and track your progress in the casino dashboard.',
  },
  {
    title: 'Request Withdrawals During Business Hours',
    description: 'Manual review withdrawals are processed faster when submitted during the casino support team working hours — typically 9am to 6pm GMT.',
  },
  {
    title: 'Keep Your Withdrawal Amount Consistent',
    description: 'Large one-time withdrawals can trigger additional security checks. Withdrawing in consistent amounts reduces the chance of holds or delays.',
  },
]

export const winningProofs: WinningProof[] = [
  {
    image: '/proofs/win-001.jpg',
    caption: 'EpicWin — Gates of Pyroth | Main RM5 Cuci RM1,900',
    amount: 'MYR 1,900',
    date: 'June 2026',
  },
]