import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import styled from '@emotion/styled'
import Container from '../components/container'
import Hero from '../components/hero'
import Img from 'gatsby-image'
import kebabCase from "lodash/kebabCase"

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
  pre code {
    background: var(--foreground0);
    color: var(--bg);
    border-radius: 4px;
    width: 100%;
    overflow: scroll;
  }
  blockquote {
    margin: 1.5rem 1rem 1.5rem .5rem;
    border-left: 3px solid var(--transparentaccent);
    padding-left: 1.5rem;
    p {
      color: var(--accent);
    }
  }
  a {
      color: var(--accent);
      text-decoration: none;
      transition: 0.3s all ease-in-out;
      &:hover{
          color: var(--hoveraccent);
      }
  }
  @media only screen and (max-width: 460px) {
    margin-top: 3rem;
  }
`

const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 1rem;
  margin-bottom: 2rem;
`

const Tag = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--foreground2);
  background: var(--eventransparent);
  text-decoration: none;
  transition: 0.3s all ease-in-out;
  &:hover {
    color: var(--foreground0);
    background: var(--eventransparent1);
  }
`

const BlogPost = ({ data }) => {

    const { markdownRemark: post } = data
    
    return (
        <Layout title={post.frontmatter.title} description={post.excerpt}>
            <Hero title={post.frontmatter.title} subtitle={`${post.frontmatter.date} • ${post.timeToRead} min read`} width="640px"></Hero>
            <Container width="640px">
              <Tags>
                {post.frontmatter.tags.map(tag => (
                  <Tag to={`/tags/${kebabCase(tag)}/`}>{tag}</Tag>
                ))}
              </Tags>
            </Container>
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
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: {templateKey: {eq: "blog-post"} }
    ) {
      frontmatter {
        templateKey
        title
        date(formatString: "MMMM DD, YYYY")
        tags
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