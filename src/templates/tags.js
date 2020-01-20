import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import Container from "../components/container"
import Hero from '../components/hero'
import styled from '@emotion/styled'
import Post from '../components/post'
import BlogTags from '../components/blogtags'

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: var(--eventransparent);
`

const Title = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    h3 {
        color: var(--foreground2);
        background: var(--bg);
        padding-right: .75rem;
        margin: 0;
        flex: 0 0 auto;
    }
    @media only screen and (max-width: 460px) {
        margin: 0.5rem 0 2rem 0;
        position: relative;
        display: block;
        h3 {
            position: relative;
            margin: 0 auto;
            text-align: center;
            z-index: 5;
            max-width: 128px;
            padding: 0;
        }
        ${Divider} {
            margin-top: -.75rem;
            position: relative;
            width: 100%;
            z-index: 3;
        }
    }
`

const BlogPosts = styled.div`
    margin-top: 3rem;
    padding: 2rem 0 1rem 0;
    @media only screen and (max-width: 460px) {
        margin-top: 1rem;
        padding-top: 1rem;
    }
`

const Posts = styled.div`
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    @media only screen and (max-width: 768px) {
        grid-gap: 2rem;
    }
    @media only screen and (max-width: 460px) {
        grid-template-columns: 1fr;
        grid-gap: 3rem;
    }
`


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout title={tag}>
      <Hero title="Blog Posts" subtitle={tagHeader}></Hero>
      <Container>
        <Title>
            <h3>Filter by Tag</h3>
            <Divider />
        </Title>
        <BlogTags></BlogTags>
        <BlogPosts>
          <Posts>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              const { date } = node.frontmatter
              const { fluid } = node.frontmatter.thumbnail.childImageSharp
              const { timeToRead } = node
              const { excerpt } = node
              return (
                <Post 
                  to={slug} 
                  key={slug} 
                  title={title}
                  date={date}
                  fluid={fluid}
                  excerpt={excerpt}
                  read={timeToRead}
                  />
              )
            })}
          </Posts>
        </BlogPosts>
        {/*
                This links to a page that does not yet exist.
                You'll come back to it!
              */}
      </Container>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            thumbnail {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`