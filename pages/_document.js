import Document, { Html, Head, Main, NextScript } from 'next/document'
import {
  getCspNonce,
  getCsp
} from '../utils/csp'
import { getLangFromReq } from '../utils/fromReq'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const lang = getLangFromReq(ctx.req)
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        lang,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const nonce = getCspNonce()

    return (
      <Html lang={this.props.lang}>
        <Head nonce={nonce}>
          <meta name="description" content="Build a responsive PWA using Next.js and styled-components."></meta>
          <meta name="theme-color" content="#FFFFFF"/>
          <meta name="referrer" content={'strict-origin'} />
          <meta httpEquiv="Content-Security-Policy" content={getCsp(nonce)} />
          
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
