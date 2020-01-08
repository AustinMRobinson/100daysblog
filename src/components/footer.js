import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Container from "../components/container"

const StyledFooter = styled.footer`
    margin-top: 8rem;
    padding: 1.5rem 0 3rem 0;
    border-top: 1px solid rgba(0,0,0,0.1);
    color: #737373;
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