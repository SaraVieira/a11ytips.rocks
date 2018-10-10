import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import remcalc from 'remcalc'

const Section = styled.section`
  position: relative;
  width: ${remcalc(18)};
  height: ${remcalc(18)};
  min-width: ${remcalc(18)};
  left: ${remcalc(6)};
  margin-bottom: ${remcalc(15)};
`

const Rectangle = styled.div`
  width: ${remcalc(6)};
  height: ${remcalc(6)};
  background-color: #080808;
  position: absolute;

  transform: translateY(-50%) translateX(-50%);

  ${is('center')`
  top: ${remcalc(6)};
  left: ${remcalc(6)};
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
