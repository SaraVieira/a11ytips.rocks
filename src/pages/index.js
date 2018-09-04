import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Body = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Index = ({
  data: {
    allMarkdownRemark,
    site: {
      siteMetadata: { title, description },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: description }]}
      title={title}
    />
    {allMarkdownRemark.edges.map(({ node }) => {
      return (
        <Body key={node.frontmatter.slug}>
          <header>
            <h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={node.frontmatter.link}
              >
                {node.frontmatter.title}
              </a>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: node.html }} />
          </header>
          <figure style={{ width: '200%' }}>
            {node.frontmatter.featuredImage.childImageSharp ? (
              <Img
                alt={node.frontmatter.title}
                sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              />
            ) : (
              <img
                alt={node.frontmatter.title}
                src={node.frontmatter.featuredImage.publicURL}
              />
            )}
          </figure>
        </Body>
      )
    })}
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            slug
            link
            title
            featuredImage {
              publicURL
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
