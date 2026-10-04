'use client'

import { Lock, Mail } from 'lucide-react'
import { useActionState } from 'react'
import { joinNewsletter, type SignupState } from '@/app/actions'

const initialState: SignupState = { status: 'idle', message: '' }

export function Newsletter() {
  const [state, formAction, pending] = useActionState(joinNewsletter, initialState)

  return (
    <section aria-labelledby="newsletter-heading" className="bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-5">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
            <Mail className="size-9" aria-hidden />
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand">STORMPROOF RELATIONSHIP NEWSLETTER</p>
            <h2 id="newsletter-heading" className="text-xl font-bold text-balance">
              Actionable relationship advice delivered to your inbox.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Strong relationships are built over time. Receive weekly, bite-sized guidance for the process.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3 lg:w-full lg:max-w-xl">
          {state.status === 'success' ? (
            <p role="status" className="rounded-lg bg-card px-5 py-4 font-medium text-foreground ring-1 ring-border">
              {state.message}
            </p>
          ) : (
            <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="nl-name" className="sr-only">
                Your name
              </label>
              <input
                id="nl-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className="h-11 min-w-0 flex-1 rounded-md border border-input bg-card px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <label htmlFor="nl-email" className="sr-only">
                Your email
              </label>
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Your email"
                className="h-11 min-w-0 flex-1 rounded-md border border-input bg-card px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button
                type="submit"
                disabled={pending}
                className="h-11 shrink-0 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {pending ? 'Signing up...' : 'Sign me up'}
              </button>
            </form>
          )}
          {state.status === 'error' && (
            <p role="alert" className="text-sm text-destructive">
              {state.message}
            </p>
          )}
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" aria-hidden />
            {"You're safe with me. I'll never spam you or sell your contact information."}
          </p>
        </div>
      </div>
    </section>
  )
}
