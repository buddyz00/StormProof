export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-bold text-balance md:text-4xl">
        {title}
      </h2>
      {description && <p className="leading-relaxed text-muted-foreground text-pretty">{description}</p>}
    </div>
  )
}
