import { useState } from 'react'
import { Gavel, PartyPopper, ShieldX, Stamp } from 'lucide-react'
import FloatingHearts from './FloatingHearts'
import HeartBurst from './HeartBurst'
import RunawayButton from './RunawayButton'
import { useToast } from './Toast'

function Title({ text, highlight }) {
  const [before, after] = highlight && text.includes(highlight) ? text.split(highlight) : [text, null]
  return (
    <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
      {before}
      {after !== null && <em className="font-medium text-rose-500">{highlight}</em>}
      {after}
    </h1>
  )
}

export default function WelcomeSection({ data, photo }) {
  const notify = useToast()
  const [accepted, setAccepted] = useState(false)
  const [burst, setBurst] = useState(0)

  const accept = () => {
    setAccepted(true)
    setBurst((b) => b + 1)
  }

  return (
    <section id="apology" className="relative overflow-hidden pb-20 pt-10 sm:pt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.rose.100),transparent_55%)]"
        aria-hidden
      />
      <FloatingHearts count={7} />

      <div className="gutter relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="hero-in min-w-0">
          <Title text={data.title} highlight={data.highlight} />

          <article className="card relative mt-8 p-6 sm:p-8">
            <span className="absolute -top-3 right-5 inline-flex rotate-6 items-center gap-1 rounded-md border-2 border-rose-400 bg-white px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-rose-500">
              <Stamp className="h-3 w-3" aria-hidden />
              Official
            </span>
            <p className="font-display text-xl italic text-rose-700">{data.greeting}</p>
            <div className="mt-4 space-y-4 text-[1.05rem] leading-relaxed text-ink/80">
              {data.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-ink/60">{data.signoff}</p>
            <p className="font-hand text-3xl leading-tight text-rose-600">{data.signature}</p>
          </article>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="relative">
              <button type="button" onClick={accept} className="btn-primary text-base sm:text-lg">
                {data.acceptLabel}
              </button>
              <HeartBurst burstKey={burst} count={22} />
            </div>
            {accepted ? (
              <p className="pop-in flex items-center gap-2 text-sm font-medium text-ink/60">
                <Gavel className="h-4 w-4 text-rose-500" aria-hidden />
                {data.caseClosed}
              </p>
            ) : (
              <RunawayButton
                label={data.rejectLabel}
                quips={data.rejectQuips}
                onCaught={() => notify(data.rejectToast, ShieldX)}
              />
            )}
          </div>

          <div aria-live="polite">
            {accepted && (
              <div
                key={burst}
                className="pop-in mt-6 flex items-start gap-3 rounded-2xl bg-rose-500/10 p-4 ring-1 ring-rose-200"
              >
                <PartyPopper className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" aria-hidden />
                <p className="font-semibold text-rose-800">{data.acceptedMessage}</p>
              </div>
            )}
          </div>
        </div>

        <figure className="hero-in mx-auto w-full max-w-xs rotate-2 rounded-2xl bg-white p-3 pb-4 shadow-soft ring-1 ring-rose-100 transition-transform duration-500 [animation-delay:150ms] hover:rotate-0 sm:max-w-sm">
          <img src={photo.src} alt={photo.alt} className="aspect-[4/5] w-full rounded-xl object-cover" />
          <figcaption className="mt-3 text-center font-hand text-2xl text-ink/70">{photo.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
