import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
import Head from 'next/head'
import React from 'react'
import { respondTo } from '../styles/mixins'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${respondTo.xs`
    background-color: ${({ theme }) => theme.colors.eggBlue};
  `}
  ${respondTo.sm`
    background-color: ${({ theme }) => theme.colors.salmon};
  `}
  ${respondTo.md`
    background-color: ${({ theme }) => theme.colors.amber};
  `}
  ${respondTo.lg`
    background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  `}
`

const Heading = styled.h1`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 16px;
`

const Item = styled.div`
  height: 100px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`

const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js responsive PWA</title>
      </Head>
      <Grid>
        <Row>
          <Col 
            xs={12} 
            sm={10} smOffset={1}
            md={10} mdOffset={1}
            lg={10} lgOffset={1}
          >
            <Wrapper>
              <Row>
                <Heading>Next.js responsive PWA</Heading>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}><Item/></Col>
                <Col xs={12} sm={6} md={4} lg={3}><Item/></Col>
                <Col xs={12} sm={6} md={4} lg={3}><Item/></Col>
                <Col xs={12} sm={6} md={4} lg={3}><Item/></Col>
              </Row>
            </Wrapper>
          </Col>
        </Row>
      </Grid>
    </>
  )
}

export default Index
