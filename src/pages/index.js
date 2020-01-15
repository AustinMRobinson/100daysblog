import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import Hero from "../components/hero"
import Container from '../components/container'
import Img from 'gatsby-image'

const BlogPosts = styled.div`
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
    grid-gap: 7%;
    @media only screen and (max-width: 460px) {
        grid-template-columns: 1fr;
        grid-gap: 4rem;
    }
`

const Thumbnail = styled(Img)`
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 12px 4px 40px var(--transparent1);
    transition: 0.3s all ease-in-out;
`

const Excerpt = styled.p`
    color: var(--foreground1);
    transition: 0.3s all ease-in-out;
    margin: 0.5rem 0 2rem 0;
    @media only screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`

const PostInfo = styled.p`
    color: var(--foreground2);
    font-size: 0.9rem;
    transition: 0.3s all ease-in-out;
    margin-bottom: 0;
`

const Post = styled(Link)`
    color: inherit;
    text-decoration: none;
    h3 {
        transition: 0.3s all ease-in-out;
        margin-bottom: 0.75rem;
        font-size: 2rem;
        line-height: 2.125rem;
    }
    &:hover {
        h3 {
            color: var(--accent);
        }
        img {
            box-shadow: 12px 4px 48px var(--transparent2);
        }
    }
`


const IndexPage = ({ data }) => {

    return (
        <Layout title="Hello World!" description="A 100 Days of Gatsby Blog" image={data.site.siteMetadata.image}>
            <Hero title="Hello World!" subtitle="This is a barebones #100DaysofGatsby blog created by Austin Robinson."/>
            <Container>
                <BlogPosts>
                    <Posts>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Post to={node.fields.slug} key={node.id}>
                                <Thumbnail fluid={node.frontmatter.thumbnail.childImageSharp.fluid} draggable="false"></Thumbnail>
                                <h3>{node.frontmatter.title}</h3>
                                <Excerpt>{node.excerpt}</Excerpt>
                                <PostInfo>{node.frontmatter.date} • {node.timeToRead} min read</PostInfo>
                            </Post>
                        ))}
                    </Posts>
                </BlogPosts>
            </Container>
        </Layout>
    )
}

export default IndexPage

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