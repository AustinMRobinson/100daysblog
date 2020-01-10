import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { bool } from 'prop-types';

export const StyledMenu = styled.div`
    display: none;
    background: var(--evenlesstransparent);
    backdrop-filter: saturate(50%) blur(25px);
    box-shadow: 0 18px 36px -18px var(--transparent0);
    width: 100%;
    text-align: left;
    padding: 4rem 6rem 3rem 3rem;
    position: absolute;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
    @media (max-width: 768px) {
        width: auto;
        padding: 5rem 1rem 1rem 0.5rem;
        display: ${({ open }) => open ? 'flex' : 'none'};
    }
    @media (max-width: 460px) {
        position: fixed;
        padding: 2rem;
        height: 100%;
        align-items: center;
        display: ${({ open }) => open ? 'flex' : 'none'};
    }
`

const NavMenuList = styled.div`
    width: 100%;
    @media (max-width: 460px) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-items: center;
    }
`

const NavItem = styled(Link)`
    width: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    padding: 2rem 2.5rem;
    margin: 1rem 0;
    font-weight: bold;
    text-align: left;
    color: var(--foreground0);
    text-decoration: none;
    transition: color 0.3s linear;
    display: block;
    &:hover {
      color: var(--accent);
    }
    @media (max-width: 768px) {
        padding: 1rem;
        margin: 1rem 0;
    }
    @media (max-width: 460px) {
      font-size: 1.5rem;
      text-align: center;
    }
`



const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <NavMenuList>
            <NavItem to="/">Blog</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact Me</NavItem>
        </NavMenuList>
      </StyledMenu>
    )
  }
  Menu.propTypes = {
    open: bool.isRequired,
  }
  export default Menu;