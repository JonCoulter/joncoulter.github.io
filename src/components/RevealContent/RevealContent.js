import React, { useEffect, useRef, useState } from 'react'

import './RevealContent.css'

export default function RevealContent({
  children,
  speed = 900,
  softnessPx = 92,
  startPx = 16,
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

  const safeSoftnessPx = Math.min(Math.max(softnessPx, 20), 220)
  const safeStartPx = Math.max(startPx, 8)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const height = node.scrollHeight || node.clientHeight || 1
    const startEdgePx = Math.min(safeStartPx, Math.max(height - 1, 1))
    const endPx = height + (safeSoftnessPx * 2)
    const travelDistance = Math.max(endPx - startEdgePx, 1)
    const nextDuration = Math.max(travelDistance / speed, 0.35)

    setRevealConfig({
      duration: nextDuration,
      softnessPx: safeSoftnessPx,
      startPx: startEdgePx,
      endPx,
    })

    setShowMask(true)
  }, [children, speed, safeSoftnessPx, safeStartPx])

  const handleAnimationEnd = (event) => {
    if (event.animationName === 'reveal-progress') {
      setShowMask(false)
    }
  }

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
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  )
}