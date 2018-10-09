import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Article from '../components/Article'

import Layout from '../components/layout'

const Index = ({
  data: {
    allMarkdownRemark,
    site: {
      siteMetadata: { title, description }
    }
  },
  location
}) => (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: description }]}
        title={title}
      />
      {allMarkdownRemark.edges.map(({ node }) => {
        return <Article key={node.frontmatter.slug} {...node} />
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
