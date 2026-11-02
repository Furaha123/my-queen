import { useEffect, useRef, useState } from 'react'
import { Infinity as InfinityIcon, Lock, Gauge, Ban, RotateCcw } from 'lucide-react'
import Section from './Section'
import { useToast } from './Toast'

function Switch({ id, checked, onClick, locked, wiggle, label }) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onClick}
      className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 ${
        checked ? 'bg-rose-500' : 'bg-rose-100'
      } ${wiggle ? 'wiggle' : ''}`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow transition-transform duration-300 ${
          checked ? 'translate-x-7' : 'translate-x-1'
        }`}
      >
        {locked && <Lock className="h-3 w-3 text-rose-400" aria-hidden />}
      </span>
    </button>
  )
}

function Row({ icon: Icon, title, text, children }) {
  return (
    <div className="flex items-center gap-4 p-5 sm:p-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-ink">{title}</p>
        <p className="text-sm text-ink/60">{text}</p>
      </div>
      {children}
    </div>
  )
}

function sincerityNote(value, max) {
  if (value >= max) return 'He physically cannot be more sorry.'
  if (value >= 150) return 'Sincerity overflow. Engineers have been notified.'
  if (value >= 100) return 'Fully sincere. No notes.'
  return 'Still loading sincerity...'
}

export default function SettingsSection({ data }) {
  const notify = useToast()
  const [wiggle, setWiggle] = useState(0)
  const [apologiesOn, setApologiesOn] = useState(true)
  const [sincerity, setSincerity] = useState(data.sincerityStart)
  const snapBack = useRef()

  useEffect(() => () => clearTimeout(snapBack.current), [])

  const tryForehead = () => {
    setWiggle((w) => w + 1)
    notify(data.foreheadToast, Lock)
  }

  const tryApologies = () => {
    if (!apologiesOn) return
    setApologiesOn(false)
    clearTimeout(snapBack.current)
    snapBack.current = setTimeout(() => {
      setApologiesOn(true)
      notify(data.apologiesToast, InfinityIcon)
    }, 550)
  }

  const maxed = sincerity >= data.sincerityMax
  const pct = Math.min(100, sincerity)

  return (
    <Section id="settings" eyebrow={data.eyebrow} title={data.title} intro={data.intro} className="bg-white/60">
      <div className="card reveal mx-auto max-w-2xl divide-y divide-rose-100 overflow-hidden">
        <Row icon={Ban} title={data.foreheadTitle} text={data.foreheadText}>
          <Switch
            key={wiggle}
            id="forehead-jokes"
            label={data.foreheadTitle}
            checked={false}
            locked
            wiggle={wiggle > 0}
            onClick={tryForehead}
          />
        </Row>

        <Row icon={InfinityIcon} title={data.apologiesTitle} text={data.apologiesText}>
          <Switch id="unlimited-apologies" label={data.apologiesTitle} checked={apologiesOn} onClick={tryApologies} />
        </Row>

        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
              <Gauge className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-ink">{data.sincerityTitle}</p>
              <p className="text-sm text-ink/60" aria-live="polite">
                {sincerityNote(sincerity, data.sincerityMax)}
              </p>
            </div>
            <span className="font-display text-2xl font-semibold tabular-nums text-rose-600">{sincerity}%</span>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-rose-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-300 to-rose-500 transition-[width] duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={maxed}
              onClick={() => setSincerity((s) => Math.min(data.sincerityMax, s + data.sincerityStep))}
              className="btn-primary px-5 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {maxed ? 'Maximum reached' : 'Boost sincerity'}
            </button>
            {maxed && (
              <button
                type="button"
                onClick={() => setSincerity(data.sincerityStart)}
                className="btn-ghost px-5 py-2.5 text-sm"
              >
                <RotateCcw className="h-4 w-4" aria-hidden />
                Do it again
              </button>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
