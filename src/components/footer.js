import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Container from "../components/container"

const StyledFooter = styled.footer`
    margin-top: 8rem;
    padding: 1.5rem 0 3rem 0;
    border-top: 1px solid var(--eventransparent);
    color: var(--foreground2);
    @media only screen and (max-width: 768px) {
        margin-top: 4rem;
        padding: 2rem 2rem 3rem 2rem;
    }
    @media only screen and (max-width: 460px) {
        text-align: center;
        margin-top: 3rem;
    }
`

const Footer = () => {
    const today = new Date()

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)

    return (
        <Container>
            <StyledFooter>
                <p>© {data.site.siteMetadata.author} {today.getFullYear()}</p>
            </StyledFooter>
        </Container>

    )
}

export default Footer