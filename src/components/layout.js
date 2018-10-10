import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import remcalc from 'remcalc'
import styled from 'styled-components'
import Gifffer from 'gifffer/lib/gifffer'
import 'reset-css/reset.css'
import './body.css'
import Logo from './Logo'

if (typeof window !== 'undefined') {
  window.onload = function() {
    Gifffer({
      playButtonStyles: {
        width: '60px',
        height: '60px',
        background: '#080808',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)'
      },
      playButtonIconStyles: {
        width: '0',
        height: '0',
        'border-top': '12px solid transparent',
        'border-bottom': '12px solid transparent',
        'border-left': '20.8px solid #fff',
        position: 'absolute',
        top: '50%',
        left: '50%',
        opacity: 0.8,
        transition: 'opacity 100ms ease',
        transform: 'translateY(-50%) translateX(-50%)'
      }
    })
  }
}
const StyledLogo = styled(Logo)`
  width: ${remcalc(83)};
`

const H1 = styled.h1`
  font-weight: bold;
  font-size: ${remcalc(90)};
  color: #080808;
  line-height: ${remcalc(78)};
  margin-bottom: ${remcalc(60)};
  width: ${remcalc(500)};
  max-width: 100%;
  margin-top: ${remcalc(40)};

  @media (max-width: 500px) {
    font-size: ${remcalc(50)};
    line-height: 1;
  }
`

const Description = styled.p`
  width: ${remcalc(560)};
  max-width: 100%;
  margin-bottom: ${remcalc(40)};
`

const Header = styled.header`
  width: ${remcalc(983)};
  max-width: 80%;
  margin: auto;
`

const Main = styled.main`
  margin-bottom: ${remcalc(120)};
`

const Nav = styled.nav`
  float: right;

  @media (max-width: 500px) {
    float: none;
    margin-top: ${remcalc(40)};
  }

  ul {
    display: flex;
  }
  ul li:not(:last-child) {
    margin-right: ${remcalc(30)};
  }
`

const Template = ({
  location,
  children,
  description,
  title = 'Create products for everyone.'
}) => (
  <Fragment>
    <Header>
      <Link aria-label="Home" className="no-border" to={'/'}>
        <StyledLogo />
      </Link>
      <Nav>
        <ul>
          <li>
            <Link to={'/'}>Tips</Link>
          </li>
          <li>
            <Link to={'/submit'}>Submit</Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SaraVieira/a11ytips.rocks"
            >
              GitHub repo
            </a>
          </li>
        </ul>
      </Nav>
      <H1>{title}</H1>
      {description ? (
        <Description>
          We encourage submissions from creators or finders of interesting AI
          and JavaSctipt projects. To submit you can simply create a Pull
          Request to the{' '}
          <a href="https://github.com/SaraVieira/a11ytips.rocks">GitHub repo</a>{' '}
          with the content you want to add.
        </Description>
      ) : null}
    </Header>
    <Main>{children}</Main>
  </Fragment>
)

export default Template
