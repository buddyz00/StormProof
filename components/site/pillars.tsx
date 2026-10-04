import { ArrowRight, Brain, HeartPulse, Puzzle, Target } from 'lucide-react'
import { circleLinks } from '@/lib/circle'
import { SectionHeading } from './section-heading'

const pillars = [
  {
    title: 'Defaults',
    description:
      'What each of you brings in automatically\u2014personality, stress wiring, family history, attachment, biology, and experience.',
    icon: Brain,
    tone: 'primary',
    href: circleLinks.pillars.defaults,
  },
  {
    title: 'Differences',
    description:
      'Preferences, communication styles, emotional rhythms, priorities, perspectives, and values that can create friction.',
    icon: Puzzle,
    tone: 'brand',
    href: circleLinks.pillars.differences,
  },
  {
    title: 'Distress',
    description:
      'How internal strain, external pressure, and unresolved stress overload capacity and amplify small issues.',
    icon: HeartPulse,
    tone: 'primary',
    href: circleLinks.pillars.distress,
  },
  {
    title: 'Deliberateness',
    description:
      'Intentional care, communication, repair, investment, and shared meaning that move a relationship beyond autopilot.',
    icon: Target,
    tone: 'brand',
    href: circleLinks.pillars.deliberateness,
  },
] as const

export function Pillars() {
  return (
    <section id="school" className="scroll-mt-20 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="ONLINE COURSES"
            title="The Four Pillars of STORM PROOF Relationships"
            description="Build the insight and skills needed to create a resilient, connected relationship."
          />
          <a href={circleLinks.school} className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand">
            Explore the School <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ title, description, icon: Icon, tone, href }, i) => {
            const color = tone === 'brand' ? 'text-brand' : 'text-primary'
            const fill = tone === 'brand' ? 'bg-brand text-brand-foreground' : 'bg-primary text-primary-foreground'
            return (
              <li key={title}>
                <a
                  href={href}
                  className="group relative flex h-full flex-col gap-3 rounded-xl p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold ${fill}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className={`mx-auto size-12 ${color}`} strokeWidth={1.5} aria-hidden />
                  <h3 className="text-center text-lg font-bold">{title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
