import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from "@emotion/styled"
import Container from '../components/container'

const StyledHeader = styled.header`
    padding: 1rem 0;
    margin-bottom: 3rem;
    background: white;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a {
        text-decoration: none;
    }
`

const NavMain = styled(Link)`
    font-size: 1.5rem;
`

const NavItems = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
        display: inline-block;
        margin-left: 2rem;
    }
`

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
    `)
    
    return (
        <StyledHeader>
            <Container>
                <nav>
                    <NavMain to="/">{data.site.siteMetadata.title}</NavMain>
                    <NavItems>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </NavItems>
                </nav>
            </Container>
        </StyledHeader>
    )
}

export default Header