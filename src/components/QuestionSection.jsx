import { useState } from 'react'
import { Clock, HeartHandshake } from 'lucide-react'
import Section from './Section'
import HeartBurst from './HeartBurst'

export default function QuestionSection({ data }) {
  const [answer, setAnswer] = useState(null) // null | 'yes' | 'think'
  const [thinkCount, setThinkCount] = useState(0)
  const [burst, setBurst] = useState(0)

  const sayYes = () => {
    setAnswer('yes')
    setBurst((b) => b + 1)
  }
  const thinkAboutIt = () => {
    setAnswer('think')
    setThinkCount((c) => c + 1)
  }

  // The "yes" button grows a little each time she chooses to think about it (capped).
  const yesScale = Math.min(1 + thinkCount * 0.07, 1.35)
  const followUp = data.thinkFollowUps[Math.min(thinkCount, data.thinkFollowUps.length) - 1] || ''

  return (
    <Section id="question" eyebrow={data.eyebrow}>
      <div className="card reveal relative mx-auto max-w-2xl px-6 py-12 text-center sm:px-12">
        <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">{data.question}</h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <div className="relative">
            <button
              type="button"
              onClick={sayYes}
              className="btn-primary text-base transition-transform"
              style={{ transform: `scale(${yesScale})` }}
            >
              {data.yesLabel}
            </button>
            <HeartBurst burstKey={burst} count={26} />
          </div>
          <button type="button" onClick={thinkAboutIt} className="btn-ghost text-base">
            {data.thinkLabel}
          </button>
        </div>

        <div className="mt-8 min-h-[6rem]" aria-live="polite">
          {answer === 'yes' && (
            <div key={`yes-${burst}`} className="pop-in flex items-start gap-3 rounded-2xl bg-rose-500/10 p-5 text-left ring-1 ring-rose-200">
              <HeartHandshake className="mt-0.5 h-6 w-6 shrink-0 text-rose-500" aria-hidden />
              <p className="text-lg font-semibold text-rose-800">{data.yesMessage}</p>
            </div>
          )}
          {answer === 'think' && (
            <div key={`think-${thinkCount}`} className="pop-in flex items-start gap-3 rounded-2xl bg-amber-50 p-5 text-left ring-1 ring-amber-200">
              <Clock className="mt-0.5 h-6 w-6 shrink-0 text-amber-500" aria-hidden />
              <div>
                <p className="text-lg font-semibold text-amber-900">{data.thinkMessage}</p>
                {followUp && <p className="mt-1 text-sm text-amber-800/80">{followUp}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
