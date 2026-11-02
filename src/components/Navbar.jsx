import { Heart } from 'lucide-react'

const links = [
  ['apology', 'Apology'],
  ['settings', 'Settings'],
  ['special', 'Why you'],
  ['note', 'Love note'],
  ['question', 'The question'],
]

export default function Navbar({ brand }) {
  return (
    <header
      className="sticky z-40 border-b border-rose-100/80 bg-blush/85 backdrop-blur-md"
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className="gutter mx-auto flex h-16 max-w-6xl items-center justify-between" aria-label="Main">
        <a href="#apology" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <Heart className="h-5 w-5 text-rose-500" aria-hidden />
          {brand}
        </a>
        <ul className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] text-ink/60 md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-rose-600">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#question"
          className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-sm active:scale-95 md:hidden"
        >
          The question
        </a>
      </nav>
    </header>
  )
}
