import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import Hero from "../components/hero"
import Container from '../components/container'
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


const Blog = ({ data }) => {

    return (
        <Layout title="Blog Posts" description="A development blog by Austin Robinson!" image={data.site.siteMetadata.image}>
            <Hero title="Blog Posts" subtitle="These are my blog posts"/>
            <Container>
                <Title>
                    <h3>Filter by Tag</h3>
                    <Divider />
                </Title>
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