import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
import Input from '../components/input'
import TextArea from '../components/textarea'
import Button from '../components/button'

const ContactPage = () => {
    return (
        <Layout title="Contact Me">
            <Hero title="Contact Me" subtitle="Drop me a line"/>
            <Container>
                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <Input name="name" id="name" label="Full Name" placeholder="Enter your name" type="text" htmlFor="name"></Input>
                    <Input name="email" id="email" label="Email Address" placeholder="Enter your email address" type="text" htmlFor="email"></Input>
                    <TextArea name="message" id="message" label="Your Message" placeholder="Enter your message" type="textarea" htmlFor="message"></TextArea>
                    <Button type="submit">Send Message</Button>
                </form>
            </Container>
        </Layout>
    )
}

export default ContactPage
