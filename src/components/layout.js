import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Gifffer from 'gifffer'
import 'reset-css/reset.css'
import './body.css'
import logo from '../assets/logo.svg'

window.onload = function () {
  Gifffer({
    playButtonStyles: {
      'width': '60px',
      'height': '60px',
      'background': '#080808',
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'transform': 'translateY(-50%) translateX(-50%)'
    },
    playButtonIconStyles: {
      'width': '0',
      'height': '0',
      'border-top': '12px solid transparent',
      'border-bottom': '12px solid transparent',
      'border-left': '20.8px solid #fff',
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      opacity: 0.8,
      transition: 'opacity 100ms ease',
      'transform': 'translateY(-50%) translateX(-50%)'
    }
  });
}

const Logo = styled.img`
  margin-bottom: 40px;
  width: 83px;
`

const H1 = styled.h1`
  font-weight: bold;
  font-size: 90px;
  color: #080808;
  line-height: 78px;
  margin-bottom: 60px;
  width: 500px;
  max-width: 100%;
`

const Header = styled.header`
  width: 983px;
  max-width: 80%;
  margin: auto;
`

const Main = styled.main`
  width: 983px;
  max-width: 80%;
  margin: auto;
`

const Nav = styled.nav`
  float: right;
  ul {
    display: flex;
  }
  ul li:not(:last-child) {
    margin-right: 30px;
  }
`

const Template = ({ location, children }) => (
  <Fragment>
    <Header>
      <Link className="no-border" to={'/'}>
        <Logo src={logo} />
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
      <H1>Create products for everyone.</H1>
    </Header>
    <Main>{children}</Main>
  </Fragment>
)

export default Template
