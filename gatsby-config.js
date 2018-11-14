const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Aryora- Passive Investing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-eslint',  // this will allow eslint error to fail compilation
    'gatsby-plugin-postcss',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: path.join(__dirname, 'src','img'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
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
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: 'p764htn8sd7a',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     analyzerPort: 3000,
    //     production: true,
    //   },
    // },
    // 'gatsby-plugin-manifest', https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=manifest
    // 'gatsby-plugin-offline', https://github.com/Creatiwity/gatsby-plugin-favicon
    'gatsby-plugin-netlify',
  ],
};
