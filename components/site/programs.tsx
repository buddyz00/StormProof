import { ArrowRight, BookOpen, HeartHandshake, Sprout, Users } from 'lucide-react'
import Image from 'next/image'
import { circleLinks } from '@/lib/circle'
import { SectionHeading } from './section-heading'

const programs = [
  {
    title: 'Stormproof Living',
    description: 'Build resilience in your personal life and environment to withstand any challenge.',
    image: '/images/program-living.png',
    alt: 'A person sitting on a mountain summit at sunrise',
    icon: Sprout,
    tone: 'brand',
    href: circleLinks.programs.living,
  },
  {
    title: 'Stormproof Couples',
    description:
      'Strengthen your relationship with proven strategies for connection, communication, commitment, and lasting love.',
    image: '/images/program-couples.png',
    alt: 'A couple holding hands and talking on a couch',
    icon: HeartHandshake,
    tone: 'primary',
    href: circleLinks.programs.couples,
  },
  {
    title: 'Stormproof Parenting',
    description: 'Guide the next generation with intention, patience, and understanding.',
    image: '/images/program-parenting.png',
    alt: 'A family holding hands walking at sunset',
    icon: Users,
    tone: 'brand',
    href: circleLinks.programs.parenting,
  },
  {
    title: 'Stormproof Faith',
    description: 'Deepen your faith and integrate spiritual principles into daily life and your relationships.',
    image: '/images/program-faith.png',
    alt: 'A wooden cross on a hilltop at sunrise',
    icon: BookOpen,
    tone: 'primary',
    href: circleLinks.programs.faith,
  },
] as const

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading eyebrow="GET STARTED" title="Where Would You Like To Start?" />
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Practical tools. Expert guidance. Real change. Choose the path that fits your journey.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ title, description, image, alt, icon: Icon, tone, href }) => (
            <li key={title}>
              <a
                href={href}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="relative flex flex-1 flex-col gap-2 px-5 pb-5 pt-9">
                  <span
                    className={`absolute -top-7 left-5 flex size-14 items-center justify-center rounded-full border-4 border-card bg-card shadow-md ${
                      tone === 'brand' ? 'text-brand' : 'text-primary'
                    }`}
                  >
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Start now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
