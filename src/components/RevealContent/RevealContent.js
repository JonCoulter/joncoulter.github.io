import React, { useEffect, useRef, useState } from 'react'

import './RevealContent.css'

export default function RevealContent({
  children,
  speed = 900,
  softness = 0.12,
  startProgress = 0.04,
  className = '',
}) {
  const containerRef = useRef(null)
  const [revealConfig, setRevealConfig] = useState({
    duration: 0.8,
    softnessPx: 60,
    startPx: 18,
    endPx: 600,
  })
  const [showMask, setShowMask] = useState(true)

  const safeSoftness = Math.min(Math.max(softness, 0.03), 0.45)
  const safeStart = Math.min(Math.max(startProgress, safeSoftness), 0.8)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const height = node.scrollHeight || node.clientHeight || 1
    const softnessPx = Math.min(Math.max(height * safeSoftness, 20), 220)
    const startPx = Math.max(height * safeStart, 8)
    const endPx = height + softnessPx
    const travelDistance = Math.max(endPx - startPx, 1)
    const nextDuration = Math.max(travelDistance / speed, 0.35)

    setRevealConfig({
      duration: nextDuration,
      softnessPx,
      startPx,
      endPx,
    })

    setShowMask(true)

    const timeoutId = window.setTimeout(() => {
      setShowMask(false)
    }, Math.ceil(nextDuration * 1000) + 40)

    return () => window.clearTimeout(timeoutId)
  }, [children, speed, safeSoftness, safeStart])

  return (
    <div
      ref={containerRef}
      className={`reveal-content ${showMask ? 'is-animating' : 'is-done'} ${className}`.trim()}
      style={{
        '--reveal-duration': `${revealConfig.duration}s`,
        '--reveal-softness-px': `${revealConfig.softnessPx.toFixed(2)}px`,
        '--reveal-start-px': `${revealConfig.startPx.toFixed(2)}px`,
        '--reveal-end-px': `${revealConfig.endPx.toFixed(2)}px`,
      }}
    >
      {children}
    </div>
  )
}