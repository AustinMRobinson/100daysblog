import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from '@emotion/styled'
import Container from '../components/container'
import Hero from '../components/hero'
import Img from 'gatsby-image'

const BlogThumbnail = styled(Img)`
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 3rem;
  box-shadow: 12px 0 40px rgba(0,0,0,0.05);
`

const BlogPost = ({ props, data }) => {
    const post = data.markdownRemark
    return (
        <Layout title={post.frontmatter.title} description={post.excerpt}>
            <Hero title={post.frontmatter.title} subtitle={`${post.frontmatter.date} • ${post.timeToRead} min read`} width="640px"></Hero>
            <Container>
              <BlogThumbnail fluid={post.frontmatter.thumbnail.childImageSharp.fluid} draggable="false"></BlogThumbnail>
            </Container>
            <Container width="640px">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
      html
      excerpt
    }
  }
`

export default BlogPost