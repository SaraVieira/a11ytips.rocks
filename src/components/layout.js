import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'tacit-css/dist/tacit-css-1.3.2.min.css'

const H1 = styled.h1`
  font-size: 48px;
  >margin-bottom: 20px;
  margin-top: 0;
  color: #e0e0e0;
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
    <footer>
      Made with ❤️, ☕️ and Gatsby by{' '}
      <a target="_blank" href="https://iamsaravieira.com">
        Sara Vieira
      </a>{' '}
      and supported by{' '}
      <a rel="noopener noreferrer" href="https://yldio.io">
        YLD
      </a>
    </footer>
  </Wrapper>
)

export default Template
