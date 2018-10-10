import React, { Fragment } from 'react'
import styled from 'styled-components'
import remcalc from 'remcalc'
import Link from './Resource'
import Rectangles from './Rectangles'

const Body = styled.article`
  margin-bottom: ${remcalc(20)};
  padding: ${remcalc(70)} 0;
  border-bottom: ${remcalc(1)} solid #d8d8d8;

  &:first-child {
    border-top: ${remcalc(1)} solid #d8d8d8;
  }
`

const Title = styled.h3`
  font-size: ${remcalc(48)};
  font-weight: bold;
  line-height: 1;
  color: #080808;
  padding-bottom: ${remcalc(20)};
`

const Figure = styled.figure`
  margin-left: ${remcalc(40)};
  border: ${remcalc(1)} solid #e8e8e8;

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: ${remcalc(40)};
  }
`

const Wrapper = styled.section`
  width: ${remcalc(983)};
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Img = styled.img`
  max-width: ${remcalc(426)};

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`

export default ({ frontmatter: tip, html }) => (
  <Body>
    <Wrapper>
      <header>
        <Rectangles />
        <Title>{tip.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link href={tip.link}>Resource</Link>
      </header>
      <Figure>
        <Img
          data-gifffer-alt={tip.title}
          data-gifffer={tip.featuredImage.publicURL}
        />
      </Figure>
    </Wrapper>
  </Body>
)
