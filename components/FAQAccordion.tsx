'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: 'rgba(59, 31, 10, 0.4)',
        border: isOpen ? '1px solid rgba(0,180,216,0.4)' : '1px solid rgba(240,235,227,0.08)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-off-white text-sm leading-snug">{faq.question}</span>
        <span
          className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-200 text-xs"
          style={{
            background: isOpen ? '#00B4D8' : 'rgba(0,180,216,0.15)',
            color: isOpen ? '#2D0A6B' : '#00B4D8',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '500px' : '0' }}
      >
        <p className="px-5 pb-4 text-sm text-off-white opacity-75 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
