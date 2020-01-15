import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import Container from '../../components/container'
import Img from 'gatsby-image'

const Intro = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin-top: -3rem;
    }
`

const BlurbTitle = styled.p`
    font-weight: 700;
    color: var(--foreground1);
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin: 2rem 0 .75rem 0;
`

const Blurb = styled.div`
    color: var(--foreground2);
`

const LeftCol = styled.div`
    flex: 0 0 47%;
    position: relative;
    align-self: top;
    max-height: 640px;
    overflow: hidden;
    @media (max-width: 768px) {
        margin-left: -1.5rem;
        flex: 1 0 100%;
        max-height: 360px;
    }
    @media (max-width: 460px) {
        max-height: 240px;
    }
`

const RightCol = styled.div`
    padding: 1rem 2rem;
    flex: 0 0 46%;
    h1 {
        margin-top: 0.5rem;
        font-size: 4rem;
    }
    @media (max-width: 768px) {
        flex: 1 0 100%;
        padding: 0 3rem;
        margin-top: -2rem;
        z-index: 2;
        h1 {
            font-size: 3.5rem;
        }
    }
    @media (max-width: 768px) {
        padding: 0 2rem;
        h1 {
            font-size: 3rem;
        }
    }
`

const ImageWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
        margin-top: -144px;
    }
`

const Location = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    z-index: 2;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    color: var(--foreground0);
    background: var(--transparent);
    backdrop-filter: saturate(180%) blur(5px);
    p {
        margin-bottom: 0;
        text-shadow: 0 4px 8px var(--bg);
    }
    @media (max-width: 768px) {
        height: 8rem;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(rgba(0,0,0,0) 0%, var(--bg) 100%);
        backdrop-filter: none;
        p {
            display: none;
        }
    }
    @media (max-width: 460px) {  
        height: 6rem;
    }

`

const Label = styled.p`
    margin-top: 1px;
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Archivo';
    font-weight: 700;
    margin-right: .5rem;
`

const Place = styled.p`
    font-size: 1rem;
    font-weight: 500;
`


const AboutPage = () => {

    const data = useStaticQuery(graphql`
    query AboutPage {
        markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
          frontmatter {
            title
            heading
            subheading
            bioimage {
              childImageSharp {
                fixed(height: 550, quality: 100) {
                    ...GatsbyImageSharpFixed
                }
              }
            }
            location
            bio
          }
        }
      }
      
    `)

    return (
        <Layout title="About Me">
            <section>
                <Container>
                    <Intro>
                        <LeftCol>
                            <ImageWrapper>
                                <Img fixed={data.markdownRemark.frontmatter.bioimage.childImageSharp.fixed} alt="Austin smiling with his hands in his pocket" objectFit="cover" objectPosition="50% 50%"></Img>
                            </ImageWrapper>
                            <Location>
                                <Label>Location</Label>
                                <Place>{data.markdownRemark.frontmatter.location}</Place>
                            </Location>
                        </LeftCol>
                        <RightCol>
                            <h1>{data.markdownRemark.frontmatter.heading}</h1>
                            <BlurbTitle>{data.markdownRemark.frontmatter.subheading}</BlurbTitle>
                            <Blurb>{data.markdownRemark.frontmatter.bio}</Blurb>
                        </RightCol>
                    </Intro>
                </Container>
            </section>
        </Layout>
    )
}

export default AboutPage
