/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `PDAG`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src`
      },
    },
  ],
}
