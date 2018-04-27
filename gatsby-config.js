module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-118290603-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
}
