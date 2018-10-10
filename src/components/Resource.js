import React from 'react'
import remcalc from 'remcalc'
import styled, { css } from 'styled-components'

const general = css`
  transition: all 200ms ease;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  background: #fff;
`

const H4 = styled.h3`
  margin-top: ${remcalc(20)};
  font-size: ${remcalc(18)};
  font-weight: bold;
  position: relative;
  width: ${remcalc(77)};
  height: ${remcalc(42)};
  display: flex;
  align-items: center;
  padding: 0 ${remcalc(5)};
  margin-left: ${remcalc(-5)};

  &:hover {
    background-color: #080808;

    a {
      color: white;
      padding-bottom: 0;

      :hover {
        border-bottom: none;
      }

      &:before {
        background: #004aff;
        left: ${remcalc(-2.5)};
      }

      &:after {
        background: #ff007d;
        left: auto;
        right: ${remcalc(-2.5)};
      }
    }

    &:before {
      background: #00ffd5;
      top: ${remcalc(-5)};
    }

    &:after {
      bottom: ${remcalc(-5)};
      top: auto;
      background: #eeff00;
    }
  }

  &:before,
  :after {
    ${general};
    width: ${remcalc(82)};
    height: ${remcalc(5)};
  }

  a:before {
    ${general};
    width: ${remcalc(5)};
    height: 100%;
    left: 0;
  }

  a:after {
    ${general};
    width: ${remcalc(5)};
    height: 100%;
    left: auto;
    right: 0;
  }
`

export default ({ href, children }) => (
  <H4>
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  </H4>
)
