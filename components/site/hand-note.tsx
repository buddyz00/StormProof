import { cn } from '@/lib/utils'

export function HandNote({ lines, className }: { lines: string[]; className?: string }) {
  return (
    <p
      aria-hidden
      className={cn(
        'flex -rotate-6 flex-col items-center font-hand text-3xl leading-none text-foreground',
        className,
      )}
    >
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
      <span className="mt-2 h-1 w-14 -rotate-6 rounded-full bg-primary" />
    </p>
  )
}
