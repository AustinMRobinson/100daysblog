import React from 'react'
import styled from '@emotion/styled'
import Container from '../components/container'

const StyledHero = styled.section`
    padding: 2rem 0 3rem 0;
`

const Header = styled.h1`
    font-size: 3.5rem;
    margin: 0 0 .5rem 0;
`

const Subheader = styled.p`
    font-size: 1.25rem;
    color: var(--foreground3);
    margin: .5rem 0;
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