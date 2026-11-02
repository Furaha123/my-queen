import { Feather } from 'lucide-react'
import Section from './Section'

export default function LoveNoteSection({ data }) {
  return (
    <Section id="note" eyebrow={data.eyebrow} title={data.title} className="bg-white/60">
      <article className="paper reveal relative mx-auto max-w-2xl -rotate-[0.6deg] rounded-[1.75rem] p-7 shadow-soft ring-1 ring-rose-100 sm:p-12">
        <Feather className="absolute right-6 top-6 h-6 w-6 text-rose-300" aria-hidden />
        <p className="font-hand text-3xl text-rose-600">{data.to}</p>
        <div className="mt-5 space-y-[1.1rem] text-lg leading-[2.15rem] text-ink/85">
          {data.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-8 text-right font-hand text-3xl text-rose-600">{data.signature}</p>
      </article>
    </Section>
  )
}
