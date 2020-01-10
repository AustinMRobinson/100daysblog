import React from 'react'
import styled from '@emotion/styled'
import Container from '../components/container'

const StyledHero = styled.section`
    padding: 2rem 0 3rem 0;
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
    @media only screen and (max-width: 460px) {
        padding: 1rem 0 1.5rem 0;
    }
`

const Header = styled.h1`
    font-size: 3.5rem;
    line-height: 3.75rem;
    margin: 0 0 .5rem 0;
    @media only screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
    @media only screen and (max-width: 460px) {
        font-size: 2.75rem;
        line-height: 3rem;
    }
`

const Subheader = styled.p`
    font-size: 1.25rem;
    color: var(--foreground2);
    margin: .5rem 0;
    @media only screen and (max-width: 460px) {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`

const Hero = (props) => {
    return (
        <StyledHero>
            <Container width={props.width}>
                <Header>{props.title}</Header>
                <Subheader>{props.subtitle}</Subheader>
            </Container>
        </StyledHero>
    )
}

export default Hero