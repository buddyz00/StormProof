import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { circleLinks } from '@/lib/circle'
import { HandNote } from './hand-note'

export function Challenge() {
  return (
    <section aria-labelledby="challenge-heading" className="relative isolate overflow-hidden bg-secondary">
      <Image
        src="/images/challenge-couple.png"
        alt="A couple laughing together over coffee"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[75%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />

      <div className="mx-auto flex min-h-80 max-w-7xl items-center px-5 py-16 lg:px-8">
        <div className="flex max-w-lg flex-col gap-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand">FREE GIFT</p>
          <h2 id="challenge-heading" className="text-3xl font-bold leading-tight text-balance md:text-4xl">
            Take the <span className="text-primary">7 Days to Fix Your</span> Broken Relationship Challenge
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Kickstart your relationship success with step-by-step guidance, hands-on resources, and daily
            accountability check-ins inside our community.
          </p>
          <a
            href={circleLinks.challenge}
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
          >
            Yes, count me in <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>

      <HandNote className="absolute right-10 top-8 hidden lg:flex" lines={['Small', 'Steps', 'Big', 'Change']} />
    </section>
  )
}
