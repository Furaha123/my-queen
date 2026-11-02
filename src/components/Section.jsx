/** Reusable section wrapper with an optional centered heading block. */
export default function Section({ id, eyebrow, title, intro, className = '', children }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="gutter mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <div className="reveal mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h2>
            )}
            {intro && <p className="mt-4 text-lg text-ink/70">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
