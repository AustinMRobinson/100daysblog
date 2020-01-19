import React from "react"
import PropTypes from "prop-types"

// Utilities

// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Container from '../components/container'
import Hero from '../components/hero'
import BlogTags from '../components/blogtags'


const TagsPage = ({
  data: {
    // allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />
    <Hero title="Tags" subtitle="Filter posts by tag"></Hero>
    <Container>
      <BlogTags></BlogTags>
    </Container>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`