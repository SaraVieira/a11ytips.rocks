import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'

const Section = styled.section`
  position: relative;
  width: 18px;
  height: 18px;
  min-width: 18px;
  left: 6px;
  margin-bottom: 14px;
`

const Rectangle = styled.div`
  width: 6px;
  height: 6px;
  background-color: #080808;
  position: absolute;

  transform: translateY(-50%) translateX(-50%);

  ${is('center')`
  top: 6px;
  left: 6px;
`};

  ${is('top')`
    top: 0;
  `};

  ${is('bottom')`
    bottom: 0;
  `};

  ${is('right')`
    right: 0;
  `};

  ${is('left')`
    left: 0;
  `};
`

export default () => (
  <Section>
    <Rectangle top left />
    <Rectangle top right />
    <Rectangle center />
    <Rectangle bottom left />
    <Rectangle bottom right />
  </Section>
)
