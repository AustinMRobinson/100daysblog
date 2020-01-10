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
  box-shadow: 0 12px 40px var(--transparent0);
`

const BlogContent = styled.section`
  margin-top: 5rem;
  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
    box-shadow: 0px 8px 28px var(--transparent0);
  }
  p {
    color: var(--foreground1);
    line-height: 150%;
  }
  code {
    font-family: monospace;
    color: var(--foreground0);
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--eventransparent);
  }
  @media only screen and (max-width: 460px) {
    margin-top: 3rem;
  }
`

const BlogPost = ({ props, data }) => {
    const post = data.markdownRemark
    return (
        <Layout title={post.frontmatter.title} description={post.excerpt}>
            <Hero title={post.frontmatter.title} subtitle={`${post.frontmatter.date} • ${post.timeToRead} min read`} width="640px"></Hero>
            <Container>
              <BlogThumbnail fluid={post.frontmatter.thumbnail.childImageSharp.fluid} draggable="false"></BlogThumbnail>
            </Container>
            <BlogContent>
              <Container width="640px">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </Container>
            </BlogContent>
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