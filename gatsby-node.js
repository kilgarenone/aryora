/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  ...(process.env.NODE_ENV !== 'development' && {
    plugins: babelrc.plugins.concat([
      'transform-regenerator',
      'transform-runtime',
    ]),
  }),
})
