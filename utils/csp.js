import crypto from 'crypto'

const isProd = process.env.NODE_ENV === 'production'

const getCspScriptSrcExtra = inlineScriptSource => {
  const hash = crypto.createHash('sha256').update(inlineScriptSource)
  return `sha256-${hash.digest('base64')}`
}

const getCspStyleSrcExtra = () => {
  return `nonce-${randomBytes(8).toString('base64')}`
}

const getCsp = ({
  scriptSrcExtra,
  styleSrcExtra
}) => {
  const csp = []
  const hash = crypto.createHash('sha256').update(inlineScriptSource)
  const digest = hash.digest('base64')

  csp.push(`base-uri 'self'`)
  csp.push(`form-action 'self'`)
  csp.push(`default-src 'self'`)
  csp.push(`script-src 'self'${isProd ? '' : ` 'unsafe-eval'`} '${scriptSrcExtra}'`)
  csp.push(`style-src 'self'${isProd ? '': ` 'unsafe-inline'`} '${styleSrcExtra}'`)
  csp.push(`connect-src 'self' vitals.vercel-insights.com`)
  csp.push(`img-src 'self' data: blob:`)
  csp.push(`font-src 'self' data:`)
  csp.push(`frame-src *`)
  csp.push(`media-src *`)

  return csp.join('; ')
}

module.exports = {
  getCspScriptSrcExtra,
  getCspStyleSrcExtra,
  getCsp
}
