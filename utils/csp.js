import crypto from 'crypto'

const isProd = process.env.NODE_ENV === 'production'

const getCspNonce = () => crypto.randomBytes(8).toString('base64')

const getCsp = nonce => {
  const csp = []

  csp.push(`base-uri 'self'`)
  csp.push(`form-action 'self'`)
  csp.push(`default-src 'self'`)
  csp.push(`script-src 'self'${isProd ? '' : ` 'unsafe-eval'`} 'nonce-${nonce}' data:`)
  csp.push(`style-src 'self'${isProd ? '': ` 'unsafe-inline'`} 'nonce-${nonce}' data: blob:`)
  csp.push(`connect-src 'self' vitals.vercel-insights.com`)
  csp.push(`img-src 'self' data: blob:`)
  csp.push(`font-src 'self' data:`)
  csp.push(`frame-src *`)
  csp.push(`media-src *`)

  return csp.join('; ')
}

module.exports = {
  getCspNonce,
  getCsp
}
