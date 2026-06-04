import { createHmac, timingSafeEqual } from 'crypto'

function getUnsubscribeSecret() {
  const secret = process.env.UNSUBSCRIBE_SECRET || process.env.RESEND_API_KEY

  if (!secret) {
    throw new Error('Missing UNSUBSCRIBE_SECRET or RESEND_API_KEY')
  }

  return secret
}

export function createUnsubscribeToken(contactId: string) {
  return createHmac('sha256', getUnsubscribeSecret()).update(contactId).digest('hex')
}

export function isValidUnsubscribeToken(contactId: string, token: string) {
  const expected = createUnsubscribeToken(contactId)
  const expectedBuffer = Buffer.from(expected)
  const tokenBuffer = Buffer.from(token)

  if (expectedBuffer.length !== tokenBuffer.length) {
    return false
  }

  return timingSafeEqual(expectedBuffer, tokenBuffer)
}

export function buildUnsubscribeUrl(baseUrl: string, contactId: string) {
  const url = new URL('/api/unsubscribe', baseUrl)
  url.searchParams.set('contactId', contactId)
  url.searchParams.set('token', createUnsubscribeToken(contactId))

  return url.toString()
}
