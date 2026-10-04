const outlets = [
  { name: 'The New York Times', className: 'font-hand text-3xl font-bold' },
  { name: 'TODAY', className: 'text-2xl font-black tracking-tight' },
  { name: 'Psychology Today', className: 'text-2xl font-semibold tracking-tighter text-brand' },
  { name: 'Good Morning America', className: 'max-w-28 text-center text-sm font-extrabold uppercase leading-none text-brand' },
  { name: 'Forbes', className: 'text-3xl font-bold' },
  { name: 'The Washington Post', className: 'font-hand text-3xl font-bold' },
]

export function FeaturedIn() {
  return (
    <section aria-labelledby="featured-heading" className="border-b bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 lg:px-8">
        <h2 id="featured-heading" className="text-xs font-semibold tracking-[0.18em] text-brand">
          FEATURED IN
        </h2>
        <ul className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {outlets.map((o) => (
            <li key={o.name} className={o.className}>
              {o.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
