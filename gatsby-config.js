/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const queries = require('./src/utils/algolia')

module.exports = {
  siteMetadata: {
    title: `#100DaysofGatsby`,
    titleTemplate: "%s · 100 Days of Gatsby",
    author: `Austin Robinson`,
    description: `A blog detailing my experiences building in the 100 Days of Gatsby Challenge!`,
    url: `https://100-days-of-gatsby.netlify.com/`,
    avatar: `/static/img/profpic.jpg`,
    image: `/static/img/sitethumb.jpg`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000
      }
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              {
                  resolve: `gatsby-remark-images`,
                  options: {
                      maxWidth: 960,
                      linkImagesToOriginal: false // point!
                  },
              },
              {
                resolve: `gatsby-remark-images-medium-zoom`, // point!
                options: {
                  //...
                }
              }
          ],
      },
  },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/static/img`,
              name: 'images',
          },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog/`,
        name: 'blog-posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-styled-components`, // for Floating Label Input
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/img/icon.png`, // This path is relative to the root of the site.
      },
    },
  ]
}

