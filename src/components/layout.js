import React from 'react'
import Header from '../components/header'
import Container from '../components/container'
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import SEO from "../components/seo"

const PageHeader = styled.h1`
    font-size: 2.5rem;
    margin-bottom: .5rem;
`

const PageSubheader = styled.p`
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: .5px;
    font-weight: 700;
    color: #737373;
    margin: .5rem 0;
`

const Content = styled.div`
    padding: 2rem 0;
`

const Layout = (props) => {
    return (
        <div>
            <Global 
                styles={css`
                    * {
                        font-family: sans-serif;
                    }
                    body {
                        background: #f9f9f9;
                        margin: 0;
                    }
                `}
            />
            <Header></Header>
            <SEO title={props.title} description={props.description}></SEO>
            <section>
                <Container>
                    <PageHeader>{props.title}</PageHeader>
                    <PageSubheader>{props.subtitle}</PageSubheader>
                    <Content>
                        {props.children}
                    </Content>
                </Container>
            </section>
        </div>

    )
}

export default Layout