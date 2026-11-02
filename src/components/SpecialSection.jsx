import Section from './Section'

function SpecialCard({ icon: Icon, title, text }) {
  return (
    <article className="card reveal group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/50">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink/70">{text}</p>
    </article>
  )
}

export default function SpecialSection({ data }) {
  return (
    <Section id="special" eyebrow={data.eyebrow} title={data.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.cards.map((card) => (
          <SpecialCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  )
}
