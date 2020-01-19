import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import Hero from "../components/hero"
import Container from '../components/container'
import Post from '../components/post'
import BlogTags from '../components/blogtags'

const BlogPosts = styled.div`
    margin-top: 3rem;
    padding: 2rem 0 1rem 0;
    @media only screen and (max-width: 460px) {
        padding-top: 1rem;
    }
`

const Posts = styled.div`
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    @media only screen and (max-width: 460px) {
        grid-template-columns: 1fr;
        grid-gap: 4rem;
    }
`


const Blog = ({ data }) => {

    return (
        <Layout title="Blog Posts" description="A 100 Days of Gatsby Blog" image={data.site.siteMetadata.image}>
            <Hero title="Blog Posts" subtitle="This is a collection of my 100 Days of Gatsby blog posts"/>
            <Container>
                <BlogTags></BlogTags>
                <BlogPosts>
                    <Posts>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Post to={node.fields.slug} key={node.id} 
                                fluid={node.frontmatter.thumbnail.childImageSharp.fluid} 
                                title={node.frontmatter.title}
                                excerpt={node.excerpt}
                                date={node.frontmatter.date}
                                read={node.timeToRead}
                                >
                            </Post>
                        ))}
                    </Posts>
                </BlogPosts>
            </Container>
        </Layout>
    )
}

export default Blog

export const query = graphql`
  query {
    site {
        siteMetadata {
            image
        }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      totalCount
      edges {
        node {
          id
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
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`