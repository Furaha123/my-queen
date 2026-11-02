import { useEffect, useMemo, useState } from 'react'
import { Heart } from 'lucide-react'

/**
 * Celebration burst. Increase `burstKey` (1, 2, 3...) to fire it again.
 * Place inside a `relative` parent; hearts burst out from its center.
 */
export default function HeartBurst({ burstKey, count = 18 }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!burstKey) return undefined
    setActive(true)
    const t = setTimeout(() => setActive(false), 2200)
    return () => clearTimeout(t)
  }, [burstKey])

  const hearts = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() * 2 - 1) * 170,
        y: -(90 + Math.random() * 190),
        r: (Math.random() * 2 - 1) * 45,
        delay: Math.random() * 0.25,
        size: 14 + Math.random() * 18,
      })),
    // regenerate positions for every burst
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [burstKey, count],
  )

  if (!active) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center" aria-hidden>
      {hearts.map((h, i) => (
        <Heart
          key={`${burstKey}-${i}`}
          className="heart-burst absolute text-rose-500"
          fill="currentColor"
          strokeWidth={0}
          size={h.size}
          style={{ '--x': `${h.x}px`, '--y': `${h.y}px`, '--r': `${h.r}deg`, animationDelay: `${h.delay}s` }}
        />
      ))}
    </div>
  )
}
