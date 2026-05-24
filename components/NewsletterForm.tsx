'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
        placeholder="Enter your email"
        required
        className="flex-1 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all duration-200"
        style={{
          background: 'rgba(45,10,107,0.3)',
          border: status === 'error' ? '1px solid #ef4444' : '1px solid rgba(240,235,227,0.15)',
          color: '#F0EBE3',
        }}
        aria-invalid={status === 'error'}
        aria-describedby={status !== 'idle' ? 'newsletter-status' : undefined}
      />
      <button
        type="submit"
        className="rounded-xl px-6 py-3 text-sm font-bold text-deep-purple transition-all duration-200 hover:shadow-glow-blue whitespace-nowrap"
        style={{ background: '#2D0A6B', color: '#F0EBE3', border: '1px solid rgba(240,235,227,0.2)' }}
      >
        Subscribe
      </button>
      {status !== 'idle' && (
        <p
          id="newsletter-status"
          role="status"
          className="absolute -bottom-6 left-0 text-xs"
          style={{ color: status === 'success' ? '#00B4D8' : '#ef4444' }}
        >
          {status === 'success' ? 'You are subscribed.' : 'Please enter a valid email.'}
        </p>
      )}
    </form>
  )
}
