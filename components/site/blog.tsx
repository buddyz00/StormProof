import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { circleUrl } from '@/lib/circle'
import { SectionHeading } from './section-heading'

const posts = [
  {
    title: "The 4 D's of Healthy Relationships",
    date: '2026-02-16',
    image: '/images/blog-dock.png',
    alt: 'A couple sitting on a dock by a mountain lake',
    slug: 'the-4-ds-of-healthy-relationships',
  },
  {
    title: 'What Is Deliberateness in Relationships?',
    date: '2026-02-16',
    image: '/images/blog-notebook.png',
    alt: 'A notebook with the words Intentional, Present, Invested, Together',
    slug: 'what-is-deliberateness-in-relationships',
  },
  {
    title: 'What Is Relationship Distress?',
    date: '2026-02-16',
    image: '/images/blog-storm.png',
    alt: 'Sunlight breaking through storm clouds',
    slug: 'what-is-relationship-distress',
  },
]

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="LATEST FROM THE BLOG"
            title="Level Up Your Relationship Skills"
            description="Practical guidance to better understand your relationship and plan your next step."
          />
          <a href={circleUrl('/c/blog')} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            View all posts <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <a href={circleUrl(`/c/blog/${post.slug}`)} className="group flex flex-col gap-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-bold text-pretty group-hover:text-brand">{post.title}</h3>
                <time dateTime={post.date} className="-mt-2 text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </time>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
