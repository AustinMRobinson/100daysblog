import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from "@emotion/styled"
import Container from '../components/container'
import ModeToggle from './modetoggle';

const StyledHeader = styled.header`
    padding: 4rem 0 0 0;
    margin-bottom: 1rem;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--eventransparent);
    }
    a {
        text-decoration: none;
    }
`

const NavMain = styled(Link)`
    font-size: 1.5rem;
    font-family: 'futura-pt';
    font-weight: 600;
    color: var(--accent);
    transition: 0.3s all ease-in-out;
    &:hover {
        color: var(--hoveraccent);
    }
`

const NavItems = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
        display: inline-flex;
        margin-left: 2rem;
        a {
            color: var(--foreground2);
            transition: 0.3s all ease-in-out;
            &:hover {
                color: var(--foreground0);
            }
        }
    }
`

const Header = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
                author
                avatar
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
                        <li><ModeToggle></ModeToggle></li>
                    </NavItems>
                </nav>
            </Container>
        </StyledHeader>
    )
}

export default Header