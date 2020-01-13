import React from "react"
import Layout from '../components/layout'
import Container from '../components/container'
import styled from '@emotion/styled'

const Success = styled.div`
    padding: 3rem;
    background: var(--success);
`

const AboutPage = () => {
    return (
        <Layout title="Thank You!">
            <Container>
                <Success>
                    <h1>Thank you!</h1>
                </Success>
            </Container>
        </Layout>
    )
}

export default AboutPage
