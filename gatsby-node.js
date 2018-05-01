/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  ...{
    plugins: babelrc.plugins.concat([
      'transform-regenerator',
      'transform-runtime',
      'recharts',
    ]),
    presets: ['es2015'],
  },
});
// ...(process.env.NODE_ENV !== 'development' && {
//   plugins: babelrc.plugins.concat([
//     'transform-regenerator',
//     'transform-runtime',
//   ]),
// }),
// exports.modifyWebpackConfig = ({ config, stage }) => {
//   const program = {
//     directory: __dirname,
//     browserslist: ['> 1%', 'last 2 versions', 'IE >= 9'],
//   };

//   generateBabelConfig(program, stage)
//     .then((babelConfig) => {
//       console.log(babelConfig);
//       config
//         .removeLoader('js')
//         .loader('js', {
//           test: /\.js?$/,
//           exclude: /node_modules/,
//           loader: 'babel-loader',
//           query: babelConfig,
//         });
//     });
// };
