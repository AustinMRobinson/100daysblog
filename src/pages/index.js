import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import Hero from "../components/hero"
import Container from '../components/container'
import Post from '../components/post'
import Button from '../components/button'

const PostWrapper = styled.div`
    background: var(--transparentaccent2);
    padding: 3rem;
    border-radius: 1rem;
    h2 {
        margin: 0 0 0.5rem 0;
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 460px) {
        padding: 2rem 1.5rem 1.5rem 1.5rem;
        h2 {
            font-size: 2rem;
        }
    }
`

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
    grid-gap: 2rem;
    @media only screen and (max-width: 460px) {
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
`

const SeeMore = styled.div`
    margin-top: 1rem;
`

const Spacer = styled.div`
    width: 100%;
    height: ${props => props.size === 'large' ? '4rem' : '2rem'};
    @media only screen and (max-width: 460px) {
        height: ${props => props.size === 'large' ? '2rem' : '1rem'};
    }
`


const IndexPage = ({ data }) => {

    return (
        <Layout title="Hello World!" description="A development blog by Austin Robinson!" image={data.site.siteMetadata.image}>
            <Hero title="Hello World!" subtitle="This is a barebones dev blog created by Austin Robinson, used to document my journey learning new things and growing as a developer!"/>
            <Container>
                <PostWrapper>
                    <h2>Recent Posts</h2>
                    <BlogPosts>
                        <Posts>
                            {data.recentPosts.edges.map(({ node }) => (
                                <Post to={node.fields.slug} key={node.id} 
                                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid} 
                                    title={node.frontmatter.title}
                                    postinfo="none">
                                </Post>
                            ))}
                        </Posts>
                    </BlogPosts>
                    <SeeMore>
                        <Link to="/blog"><Button size="large">See all Posts</Button></Link>                
                    </SeeMore>
                </PostWrapper>
                <Spacer size="large"/>
                <PostWrapper>
                    <h2>Gatsby Posts</h2>
                    <BlogPosts>
                        <Posts>
                            {data.gatsbyPosts.edges.map(({ node }) => (
                                <Post to={node.fields.slug} key={node.id} 
                                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid} 
                                    title={node.frontmatter.title}
                                    postinfo="none">
                                </Post>
                            ))}
                        </Posts>
                    </BlogPosts>
                    <SeeMore>
                        <Link to="/tags/gatsby"><Button size="large">See all Gatsby Posts</Button></Link>                
                    </SeeMore>
                </PostWrapper>
            </Container>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    site {
        siteMetadata {
            image
        }
    }
    recentPosts: allMarkdownRemark(
        limit: 2
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
        }
      }
    }
    gatsbyPosts: allMarkdownRemark(
        limit: 2
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {frontmatter: {tags: {eq: "Gatsby"}, templateKey: {eq: "blog-post"}}}
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
        }
      }
    }
  }
`
