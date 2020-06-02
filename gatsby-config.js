/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
  	title: 'Full Stack Gatsby App',
  	author:'Shekhar Jadhav'
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
      /*resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/users',
        ],
      },*/
    },
  `gatsby-plugin-sass`],
}
