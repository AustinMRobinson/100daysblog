import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout title={post.frontmatter.title} subtitle={post.frontmatter.date} description={post.excerpt}>
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