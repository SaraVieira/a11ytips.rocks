import React from 'react'
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

const H4 = styled.h4`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  width: 77px;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin-left: -5px;

  &:hover {
    background-color: #080808;

    a {
      color: white;
      padding-bottom: 0;

      &:before {
        background: #004aff;
        left: -2.5px;
      }

      &:after {
        background: #ff007d;
        left: auto;
        right: -2.5px;
      }
    }

    &:before {
      background: #00ffd5;
      top: -5px;
    }

    &:after {
      bottom: -5px;
      top: auto;
      background: #eeff00;
    }
  }

  &:before,
  :after {
    ${general} width: 82px;
    height: 5px;
  }

  a:before {
    ${general} width: 5px;
    height: 100%;
    left: 0;
  }

  a:after {
    ${general} width: 5px;
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
