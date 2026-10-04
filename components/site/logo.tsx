import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label="Stormproof Relationships home">
      <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-background">
        <Image src="/images/logo-mark.png" alt="" fill sizes="44px" className="scale-[1.85] object-cover" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('text-2xl font-bold tracking-tight', inverted ? 'text-brand-foreground' : 'text-brand')}>
          STORM PROOF
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.18em] text-primary">
          RELATIONSHIP WELLNESS
        </span>
      </span>
    </Link>
  )
}
