import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import Resource from './Resource';

const Body = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 70px 0;
  border-bottom: 1px solid #d8d8d8;
`

const image = css`
  max-width: 426px;
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
`

const Image = styled(Img)`${image}`
const StaticImage = styled.img`${image}`

export default ({ frontmatter: tip, html }) => (
  <Body>
    <header>
      <Title>
        {tip.title}
      </Title>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <Resource href={tip.link} />
    </header>
    <Figure>
      {tip.featuredImage.childImageSharp ? (
        <Img
          alt={tip.title}
          sizes={tip.featuredImage.childImageSharp.sizes}
        />
      ) : (
          <StaticImage
            data-gifffer-alt={tip.title}
            data-gifffer={tip.featuredImage.publicURL}
          />
        )}
    </Figure>
  </Body>
)
