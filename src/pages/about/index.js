import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/layout'
import Container from '../../components/container'
import Img from 'gatsby-image'

const Intro = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 0;
        display: block;
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

const Blurb = styled.p`
    color: var(--foreground2);
`

const LeftCol = styled.div`
    flex: 0 0 47%;
    position: relative;
    align-self: top;
    max-height: 640px;
    overflow: hidden;
    @media (max-width: 768px) {
        z-index: -1;
        display: block;
        max-height: 360px;
        margin: 0 -1.5rem;
    }
    @media (max-width: 460px) {
        max-height: 240px;
    }
`

const RightCol = styled.div`
    padding: 1rem;
    flex: 0 0 43%;
    h1 {
        margin-top: 0.5rem;
        font-size: 4rem;
    }
    @media (max-width: 768px) {
        display: block;
        padding: 0 3rem;
        margin-top: -2rem;
        z-index: 3;
        h1 {
            font-size: 3.5rem;
        }
    }
    @media (max-width: 768px) {
        padding: 0 1rem;
        h1 {
            font-size: 3rem;
        }
    }
`

const ImageWrapper = styled.div`
    border-radius: 12px;
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    @media (max-width: 768px) {
        margin-top: -72px;
    }
`

const Location = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    color: var(--bg);
    background: var(--eventransparent2);
    backdrop-filter: saturate(180%) blur(5px);
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
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Archivo';
    font-weight: 700;
    margin: 1px 0.5rem 0 0;
`

const Place = styled.p`
    margin: 0;
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
