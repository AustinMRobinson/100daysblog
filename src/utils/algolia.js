const pageQuery = `{
    pages: allMarkdownRemark {
      edges {
        node {
          objectID: id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          excerpt
          html
        }
      }
    }
  }`

  
  const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      ...rest,
    }))
  const settings = { attributesToSnippet: [`excerpt:20`] }
  
  const queries = [
    {
      query: pageQuery,
      transformer: ({ data }) => flatten(data.pages.edges),
      indexName: `Pages`,
      settings,
    },
  ]
  
  module.exports = queries