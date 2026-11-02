import { useMemo } from 'react'
import { Heart } from 'lucide-react'

/** A few soft hearts drifting upward in the background. Kept sparse so the page stays calm. */
export default function FloatingHearts({ count = 7 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 97) % 100}%`,
        size: 14 + ((i * 7) % 18),
        duration: `${14 + ((i * 5) % 10)}s`,
        delay: `${-((i * 3.7) % 14)}s`,
        opacity: 0.18 + ((i * 3) % 4) * 0.05,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {hearts.map((h, i) => (
        <Heart
          key={i}
          className="floating-heart text-rose-400"
          fill="currentColor"
          strokeWidth={0}
          size={h.size}
          style={{ left: h.left, animationDuration: h.duration, animationDelay: h.delay, '--o': h.opacity }}
        />
      ))}
    </div>
  )
}
