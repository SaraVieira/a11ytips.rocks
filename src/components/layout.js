import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 48px;
  >margin-bottom: 20px;
  margin-top: 0;
`

const Anchor = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  padding: 40px 20px;
`

const Template = ({ location, children }) => (
  <Wrapper>
    <header>
      <H1>
        <Anchor to={'/'}>A11yTips.rocks</Anchor>
      </H1>
    </header>
    <main>{children}</main>
  </Wrapper>
)

export default Template
