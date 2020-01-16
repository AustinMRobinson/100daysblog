import React from 'react'
import Header from '../components/header'
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "../styles/global.css"

const Content = styled.div`
    padding: 2rem 0;
`   

const Layout = (props) => {

    return (
        <ThemeToggler>
        {({ toggleTheme }) => (
        <div>
            <Global 
                styles={css`
                    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700&display=swap');
                    @import url("https://use.typekit.net/gpp0qrl.css");
                    * {
                        font-family: 'Open Sans', sans-serif;
                    }
                    body {
                        margin: 0;
                    }
                    h1, h2, h3, h4, h5, h6 {
                        font-family: 'futura-pt';
                        font-weight: 600;
                        letter-spacing: -0.5px;
                    }
                    h1 {
                        font-size: 2.5rem;
                        margin: 3rem 0 1rem 0;
                    }
                    h2 {
                        font-size: 1.75rem;
                        margin: 2rem 0 0.5rem 0;
                    }
                `}
            />
            <Header toggleTheme={toggleTheme}></Header>
            <SEO title={props.title} description={props.description} image={props.image}></SEO>
            <main>
                <Content>
                    {props.children}
                </Content>
            </main>
            <Footer></Footer>
        </div>
        )}
    </ThemeToggler>
    )
}

export default Layout