import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const MyFilesPage = ({ data }) => {
    console.log(data)
    return (
        <Layout title="My Files">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Path</th>
                        <th>Size</th>
                        <th>Birth Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td>{node.name}</td>
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default MyFilesPage

export const query = graphql`
    query {
        allFile {
        edges {
            node {
            name
            relativePath
            prettySize
            birthTime(fromNow: true)
            }
        }
        }
    }
`