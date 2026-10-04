import { navItems } from '@/lib/nav'
import { Logo } from './logo'

const socials = [
  { name: 'Facebook', slug: 'facebook', href: 'https://facebook.com' },
  { name: 'Instagram', slug: 'instagram', href: 'https://instagram.com' },
  { name: 'YouTube', slug: 'youtube', href: 'https://youtube.com' },
  { name: 'LinkedIn', slug: 'linkedin', href: 'https://linkedin.com' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Logo inverted />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="opacity-85 transition-opacity hover:opacity-100">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex items-center gap-5">
            {socials.map((s) => (
              <li key={s.slug}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="block opacity-85 transition-opacity hover:opacity-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/icons/${s.slug}.svg`} alt={s.name} width={20} height={20} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-background/15 pt-6 text-sm opacity-75 md:flex-row">
          <p>{`\u00A9 ${new Date().getFullYear()} Stormproof Relationships. All rights reserved.`}</p>
          <p>Stronger Relationships. A Brighter World.</p>
        </div>
      </div>
    </footer>
  )
}
