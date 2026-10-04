import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { circleLinks } from '@/lib/circle'
import { HandNote } from './hand-note'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-secondary">
      <Image
        src="/images/hero-couple.png"
        alt="A smiling couple writing together in a notebook at their kitchen table"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary/90 to-transparent md:via-secondary/70 md:to-transparent" />

      <div className="mx-auto flex min-h-[34rem] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="flex max-w-xl flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-sm font-semibold tracking-[0.18em] text-brand">RELATIONSHIP WELLNESS</p>
          <h1 className="text-4xl font-bold leading-tight text-balance md:text-5xl">
            {"Let's Work On Your Relationship Together."}
          </h1>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            My step-by-step system will help you build the skills to navigate conflict, restore emotional
            safety, and create a relationship that can{' '}
            <em className="font-medium text-primary underline decoration-primary/40 underline-offset-4">
              weather any storm
            </em>
            .
          </p>
          <a
            href={circleLinks.join}
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
          >
            Get Started <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>

      <HandNote className="absolute right-8 top-10 hidden lg:flex" lines={['Stronger', 'Connections', 'Brighter', 'Tomorrows']} />
    </section>
  )
}
