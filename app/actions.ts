'use server'

export type SignupState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function joinNewsletter(
  _prev: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const name = String(formData.get('name') ?? '').trim().slice(0, 100)
  const email = String(formData.get('email') ?? '').trim().toLowerCase().slice(0, 254)

  if (!name) return { status: 'error', message: 'Please enter your name.' }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  const token = process.env.CIRCLE_API_TOKEN
  if (!token) {
    console.error('[circle] CIRCLE_API_TOKEN is not set')
    return {
      status: 'error',
      message: 'Signups are temporarily unavailable. Please try again soon.',
    }
  }

  const spaceId = Number(process.env.CIRCLE_NEWSLETTER_SPACE_ID)

  try {
    const res = await fetch('https://app.circle.so/api/admin/v2/community_members', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        ...(Number.isFinite(spaceId) && spaceId > 0 ? { space_ids: [spaceId] } : {}),
      }),
      cache: 'no-store',
    })

    if (res.ok) {
      return {
        status: 'success',
        message: `Welcome, ${name.split(' ')[0]}! Check your inbox for your invite to the community.`,
      }
    }

    const body = await res.text()
    if (res.status === 422 && /already/i.test(body)) {
      return { status: 'success', message: "You're already part of the community. Welcome back!" }
    }

    console.error('[circle] Member signup failed', res.status, body)
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  } catch (error) {
    console.error('[circle] Member signup error', error)
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }
}
