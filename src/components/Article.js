import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from './Resource'
import Rectangles from './Rectangles'

const Body = styled.article`
  margin-bottom: 20px;
  padding: 70px 0;
  border-bottom: 1px solid #d8d8d8;

  &:first-child {
    border-top: 1px solid #d8d8d8;
  }
`

const Title = styled.h3`
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  color: #080808;
  padding-bottom: 20px;
`

const Figure = styled.figure`
  margin-left: 40px;
  border: 1px solid #e8e8e8;

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 40px;
  }
`

const Wrapper = styled.section`
  width: 983px;
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
  max-width: 426px;

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
