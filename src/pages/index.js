import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from '@emotion/styled'

const BlogPosts = styled.div`
    padding: 2rem 0 1rem 0;
`

const Posts = styled.div`
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
`

const Post = styled(Link)`
    padding: 0.5rem 1.5rem;
    background: white;
    color: inherit;
    text-decoration: none;
    h3 {
        margin-bottom: 0.5rem;
    }
`

const Date = styled.p`
    margin: 0;
    color: #737373;
`

const IndexPage = ({ data }) => {
    return (
        <Layout title="Hello World">
            <p>This is my barebones <a href="https://www.gatsbyjs.org/blog/100days/" target="blank">#100DaysofGatsby</a> Blog!</p>
            <BlogPosts>
                <h2>Blog Posts</h2>
                <Posts>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Post to={node.fields.slug} key={node.id}>
                            <h3>{node.frontmatter.title}</h3>
                            <Date>{node.frontmatter.date}</Date>
                            <p>{node.excerpt}</p>
                        </Post>
                    ))}
                </Posts>
            </BlogPosts>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`