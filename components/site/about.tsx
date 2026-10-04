import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { circleUrl } from '@/lib/circle'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pt-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-8">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[3rem] bg-brand/20">
          <Image
            src="/images/zephon-lister.webp"
            alt="Portrait of Dr. Zephon Lister"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-contain object-bottom"
          />
        </div>

        <div className="flex flex-col gap-8 pb-14 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand">NICE TO MEET YOU</p>
            <h2 id="about-heading" className="text-3xl font-bold text-balance md:text-4xl">
              {"I'm Zephon Lister, PhD, LMFT"}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {"I'm a Licensed Marriage and Family Therapist and Professor of Marital and Family Therapy. For nearly three decades, I've served individuals, couples, and families through clinical practice and pastoral ministry."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My approach brings research-based{' '}
              <span className="text-foreground underline decoration-brand/50 underline-offset-4">
                insight and practical strategies
              </span>{' '}
              together with deep theological wisdom. Through Stormproof, my mission is to equip people to{' '}
              <span className="text-foreground underline decoration-brand/50 underline-offset-4">
                build relationships that endure
              </span>
              .
            </p>
            <a
              href={circleUrl('/c/about')}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Read my story <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <blockquote className="shrink-0 -rotate-3 border-l-2 border-foreground/30 pl-6 font-hand text-3xl leading-tight lg:w-52">
            <p>
              {'\u201C'}Stronger People
              <br />
              Stronger Relationships
              <br />A Brighter World{'\u201D'}
            </p>
            <span aria-hidden className="mt-2 block h-1 w-20 rounded-full bg-primary" />
          </blockquote>
        </div>
      </div>
    </section>
  )
}
