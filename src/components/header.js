import React, { useState, useRef } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { useOnClickOutside } from '../hooks.js';
import styled from "@emotion/styled"
import Container from '../components/container'
import ModeToggle from './modetoggle';
import Burger from '../components/burger.js';
import Menu from '../components/menu.js';

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
    @media (max-width: 768px) {
        padding: 0;
        nav {
            padding: 1rem 0.5rem;
        }
    }
`

const NavMain = styled(Link)`
    position: relative;
    z-index: 10;
    font-size: 1.5rem;
    font-family: 'futura-pt';
    font-weight: 600;
    color: var(--accent);
    transition: 0.3s all ease-in-out;
    &:hover {
        color: var(--hoveraccent);
    }
`

const NavItems = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`

const NavLink = styled(Link)`
    margin-right: 2rem;
    color: var(--foreground2);
    transition: 0.3s all ease-in-out;
    &:hover {
        color: var(--foreground0);
    }
    @media (max-width: 768px) {
        display: none;
    }
`

const NavMenu = styled.div`
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
    
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return (
        <StyledHeader>
            <Container>
                <nav>
                    <NavMain to="/">{data.site.siteMetadata.title}</NavMain>
                    <NavItems>
                        <NavLink to="/">Blog</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact Me</NavLink>
                        <ModeToggle></ModeToggle>
                        <NavMenu ref={node}>
                            <Burger open={open} setOpen={setOpen} />
                            <Menu open={open} setOpen={setOpen} />
                        </NavMenu>
                    </NavItems>
                </nav>
            </Container>
        </StyledHeader>
    )
}

export default Header