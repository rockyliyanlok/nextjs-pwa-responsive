import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
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
      <Grid>
        <Row>
          <Col xs={12} sm={10} md={10} lg={10} smOffset={1} mdOffset={1} lgOffset={1}>
            Next.js responsive PWA
          </Col>
        </Row>
      </Grid>
    </>
  )
}

export default Index
