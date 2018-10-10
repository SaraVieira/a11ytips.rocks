import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import remcalc from 'remcalc'
import Rectangles from '../components/Rectangles'

import Layout from '../components/layout'

const Main = styled.section`
  width: ${remcalc(983)};
  max-width: 80%;
  margin: auto;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 2.67;
  color: #080808;
  margin: ${remcalc(20)} 0;
`

const List = styled.ol`
  list-style: decimal;
  margin-left: ${remcalc(18)};

  li:not(:last-child) {
    margin-bottom: ${remcalc(20)};
  }
`
const Section = styled.section`
  margin-top: ${remcalc(60)};
  margin-bottom: ${remcalc(120)};
  display: flex;

  > section:not(:first-child) {
    margin-left: ${remcalc(6)};
  }
`

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
`

const Submit = ({
  data: {
    allMarkdownRemark,
    site: {
      siteMetadata: { title, description }
    }
  },
  location
}) => (
  <Layout description title="Submit" location={location}>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: description }]}
      title={title}
    />
    <Border />
    <Main>
      <Title>Submission guidelines</Title>
      <List>
        <li>
          Only submit <strong>one piece</strong> of content per Pull Request
        </li>
        <li>
          Needs to be{' '}
          <strong>built in JavaScript and use AI in some way</strong> - can be
          vanilla JavaScript, use any JavaScript library, or even just use an
          API relating to AI
        </li>
        <li>
          Must include a <strong>demo link</strong>, something people can click
          on and play around with.
        </li>
      </List>
      <Title>To create a Pull Request</Title>
      <List>
        <li>
          create a folder inside <b>/pages/inspire/</b>
        </li>
        <li>
          Add a markdown file (see <b>/example-post.md</b>) and any required
          images.
        </li>
        <li>
          Please note you will need to include meta data at the top section of
          the markdown file such as the title, date etc.
        </li>
        <li>
          In the description please try to explain as little or as much about
          how the application is built, especially what technologies it uses.
        </li>
        <li>
          Run <b>npm run develop</b> locally to build the site and make sure the
          content renders correctly.
        </li>
      </List>
      <p>
        All contributors to <strong>aijs.rocks</strong> must adhere to our Code
        of Conduct as outlined in the{' '}
        <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct">
          Contributor Covenant
        </a>
        , version 1.4.
      </p>
      <Section>
        <Rectangles />
        <Rectangles />
        <Rectangles />
      </Section>
    </Main>
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
  }
`

export default Submit
