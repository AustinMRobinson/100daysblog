import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'

const ContactPage = () => {
    return (
        <Layout title="Contact Me">
            <Hero title="Contact Me" subtitle="Drop me a line"/>
            <Container>
                <p>This is a contact me page.</p>
            </Container>
        </Layout>
    )
}

export default ContactPage
