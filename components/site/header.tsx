'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { circleLinks } from '@/lib/circle'
import { navItems } from '@/lib/nav'
import { Logo } from './logo'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm font-medium">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={i === 0 ? 'page' : undefined}
                  className="border-b-2 border-transparent py-1 transition-colors hover:text-brand aria-[current=page]:border-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={circleLinks.signIn}
            className="rounded-md border-2 border-brand px-5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-secondary"
          >
            Log in
          </a>
          <a
            href={circleLinks.join}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-background px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setOpen(false)} className="block py-3 font-medium">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <a href={circleLinks.signIn} className="flex-1 rounded-md border-2 border-brand py-2.5 text-center text-sm font-semibold text-brand">
              Log in
            </a>
            <a href={circleLinks.join} className="flex-1 rounded-md bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground">
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
