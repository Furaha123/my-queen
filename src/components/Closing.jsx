import { ArrowUp } from 'lucide-react'
import FloatingHearts from './FloatingHearts'

export default function Closing({ data }) {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blush to-rose-100 pb-16 pt-20">
      <FloatingHearts count={5} />
      <div className="gutter relative mx-auto max-w-2xl text-center">
        <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">{data.line1}</p>
        <p className="mt-3 font-hand text-3xl text-rose-600">{data.line2}</p>
        <a href="#apology" className="btn-ghost mt-10 text-sm">
          <ArrowUp className="h-4 w-4" aria-hidden />
          {data.backToTop}
        </a>
      </div>
    </footer>
  )
}
