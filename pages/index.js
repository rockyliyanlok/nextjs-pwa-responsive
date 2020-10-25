import Head from 'next/head'
import React from 'react'

const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js responsive PWA</title>
        <meta name="Description" content="Build a responsive PWA using Next.js and styled-components."></meta>

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#FFFFFF"/>
      </Head>
      <div>
        Next.js responsive PWA
      </div>
    </>
  )
}

export default Index
