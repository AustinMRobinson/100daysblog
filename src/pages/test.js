import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
import Input from '../components/input'

const AboutPage = () => {
    return (
        <Layout title="Testing">
            <Hero title="Testing" />
            <Container>
                <form>
                    <Input name="name" id="name" label="Full Name" placeholder="Enter your name"></Input>
                    <Input name="email" id="email" label="Email Address" placeholder="Enter your email address"></Input>
                </form>
            </Container>
        </Layout>
    )
}

export default AboutPage
