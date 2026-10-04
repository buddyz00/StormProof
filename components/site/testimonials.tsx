import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      "Our communication has completely changed. We feel closer, more understood, and equipped to handle life's challenges together.",
    author: 'Sarah & Michael',
  },
  {
    quote: 'The tools we learned gave us hope again. We went from constant conflict to real connection.',
    author: 'James',
  },
  {
    quote:
      'Practical, faith-filled, and life-changing. Stormproof gave us the skills and confidence to build a stronger marriage.',
    author: 'Lisa',
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 pb-16 pt-4 lg:px-8">
        <SectionHeading id="testimonials-heading" eyebrow="STORIES OF CHANGE" title="What People Are Saying" />
        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.author}>
              <figure className="flex h-full flex-col justify-between gap-4 rounded-xl bg-card p-6 shadow-sm ring-1 ring-border">
                <blockquote className="leading-relaxed">
                  <p>{`\u201C${t.quote}\u201D`}</p>
                </blockquote>
                <figcaption className="text-sm font-semibold text-muted-foreground">{`\u2014 ${t.author}`}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
