import { useRef, useState } from 'react'

/**
 * A button that dodges the mouse (desktop) or jumps away when tapped (mobile),
 * changing its label every time. Purely for laughs.
 */
export default function RunawayButton({ label, quips, onCaught }) {
  const wrapRef = useRef(null)
  const btnRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [index, setIndex] = useState(-1)

  const dodge = () => {
    const wrap = wrapRef.current
    const btn = btnRef.current
    if (!wrap || !btn) return
    const maxX = Math.max(0, wrap.clientWidth - btn.offsetWidth - 8)
    let x = Math.random() * maxX
    if (Math.abs(x - pos.x) < 40) x = (x + maxX / 2) % (maxX || 1)
    setPos({ x, y: (Math.random() * 2 - 1) * 14 })
    setIndex((n) => (n + 1) % quips.length)
  }

  return (
    <div ref={wrapRef} className="relative h-14 w-full sm:w-80">
      <button
        ref={btnRef}
        type="button"
        onPointerEnter={(e) => e.pointerType === 'mouse' && dodge()}
        onClick={() => {
          dodge()
          onCaught?.()
        }}
        className="btn-ghost absolute left-0 top-1.5 whitespace-nowrap py-2.5 text-sm duration-300 ease-out"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        {index < 0 ? label : quips[index]}
      </button>
    </div>
  )
}
