const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const result = await graphql(`
  {
    postsRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`)
// handle errors
if (result.errors) {
  reporter.panicOnBuild(`Error while running GraphQL query.`)
  return
}
const posts = result.data.postsRemark.edges
// Create post detail pages
posts.forEach(({ node }) => {
  createPage({
    path: node.fields.slug,
    component: blogPostTemplate,
    context: {
      slug: node.fields.slug,
    }
  })
})
// Extract tag data from query
const tags = result.data.tagsGroup.group
// Make tag pages
tags.forEach(tag => {
  createPage({
    path: `/tags/${tag.fieldValue}/`,
    component: tagTemplate,
    context: {
      tag: tag.fieldValue,
    },
  })
})
}

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/blog-post.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }