import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'

const AboutPage = () => {
    return (
        <Layout title="About Me">
            <Hero title="About Me" subtitle="Learn a bit more about me"/>
            <Container>
                <p>This is an about me page.</p>
            </Container>
        </Layout>
    )
}

export default AboutPage
