'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    let rafId: number
    let x = -100
    let y = -100

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const render = () => {
      if (dot) {
        dot.style.transform = `translate(${x - 6}px, ${y - 6}px)`
      }
      rafId = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(render)

    const onEnter = () => { if (dot) dot.style.opacity = '1' }
    const onLeave = () => { if (dot) dot.style.opacity = '0' }
    document.documentElement.addEventListener('mouseenter', onEnter)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-gas-blue opacity-0 transition-opacity duration-300"
      style={{ boxShadow: '0 0 8px rgba(0,180,216,0.8), 0 0 16px rgba(0,180,216,0.4)' }}
    />
  )
}
