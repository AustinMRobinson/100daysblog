import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from '@emotion/styled'

const BlogThumbnail = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 2rem;
`

const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout title={post.frontmatter.title} subtitle={`${post.frontmatter.date} • ${post.timeToRead} min read`} description={post.excerpt}>
            <BlogThumbnail src={post.frontmatter.thumbnail}></BlogThumbnail>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        thumbnail
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
      html
      excerpt
    }
  }
`

export default BlogPost