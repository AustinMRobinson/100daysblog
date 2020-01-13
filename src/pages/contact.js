import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
// import Input from '../components/input'

const ContactPage = () => {
    return (
        <Layout title="Contact Me">
            <Hero title="Contact Me" subtitle="Drop me a line"/>
            <Container>
                <p>This is a contact me page.</p>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" />
                    </div>
                    <ul className="actions">
                        <li>
                        <input type="submit" value="Send Message" className="special" />
                        </li>
                        <li>
                        <input type="reset" value="Clear" />
                        </li>
                    </ul>
                </form>
            </Container>
        </Layout>
    )
}

export default ContactPage
