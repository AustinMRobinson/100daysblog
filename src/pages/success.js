import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import styled from '@emotion/styled'
import Button from '../components/button'

const Success = styled.div`
    padding: 3rem;
    border-radius: 12px;
    color: var(--success);
    background: var(--transparentsuccess);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 50vh;
    h1 {
        margin-top: 1rem;
    }
    p {
        margin-bottom: 3rem;
    }
`

const SuccessButton = styled(Button)`
    color: var(--bg);
    background: var(--success);
    &:hover {
        background: var(--hoversuccess);
    }
`

const AboutPage = () => {
    return (
        <Layout title="Thank You!">
            <Container>
                <Success>
                    <div>
                        <h1>Thank you!</h1>
                        <p>Your form submission has been received!</p>
                        <Link to="/">
                            <SuccessButton>Go Back Home</SuccessButton>
                        </Link>
                    </div>
                </Success>
            </Container>
        </Layout>
    )
}

export default AboutPage
