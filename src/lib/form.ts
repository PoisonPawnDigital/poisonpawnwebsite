// Contact + apply form submissions are delivered by FormSubmit (https://formsubmit.co).
//
// No account required. The FIRST time the form is submitted, FormSubmit sends a
// one-time confirmation email to info@poisonpawn.com — click the activation link
// in it once, and every submission after that is delivered to the inbox.
//
// Privacy: the raw address below is visible in the page's network calls. After
// activation, FormSubmit emails you a hashed alias (e.g. "a1b2c3d4e5"). Drop that
// into NEXT_PUBLIC_FORMSUBMIT_TARGET to keep the real address out of the source —
// no code change needed.
const TARGET = process.env.NEXT_PUBLIC_FORMSUBMIT_TARGET || 'info@poisonpawn.com'

export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${TARGET}`

export async function submitForm(data: FormData): Promise<void> {
  // FormSubmit's AJAX endpoint takes JSON and returns JSON. Captcha must be
  // disabled for AJAX; _template=table makes the delivered email readable.
  const payload: Record<string, string> = { _captcha: 'false', _template: 'table' }
  data.forEach((value, key) => {
    if (typeof value === 'string') payload[key] = value
  })

  let res: Response
  try {
    res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('Network error. Please try again or email info@poisonpawn.com.')
  }

  const json = await res.json().catch(() => null)
  const ok = res.ok && json && (json.success === true || json.success === 'true')
  if (!ok) {
    throw new Error('Something went wrong. Please try again or email info@poisonpawn.com.')
  }
}
