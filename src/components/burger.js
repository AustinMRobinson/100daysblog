import React from 'react';
import styled from '@emotion/styled';
import { bool, func } from 'prop-types';

export const StyledBurger = styled.button`
    position: relative;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: .75rem;
    z-index: 10;
    border-radius: 1.5rem;
    margin-right: -.5rem;
    &:hover {
        background: var(--eventransparent);
        div {
            background: var(--foreground0);
        }
    }
    &:focus {
    outline: none;
    }
    div {
    width: 1.5rem;
    height: 2px;
    background: var(--foreground2);
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin-left: ${({ open }) => open ? '.2rem' : '0'};
    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    }
    @media (max-width: 768px) {
        display: flex;
    }
}
`

const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )

}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
  
export default Burger;