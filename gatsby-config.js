/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `#100DaysofGatsby`,
    titleTemplate: "%s · 100 Days of Gatsby",
    author: `Austin Robinson`,
    description: `A blog detailing my experiences building in the 100 Days of Gatsby Challenge!`,
    url: `https://admiring-galileo-482876.netlify.com`,
    avatar: `img/profpic.jpg`,
    image: "img/sitethumb.jpg",
  },
  plugins: [
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
