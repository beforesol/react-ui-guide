const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: './bundle.[hash].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin(
    //   [
    //     { from: `${__dirname}/assets/img`, to: `${__dirname}/dist/assets/img` },
    //     { from: `${__dirname}/assets/font`, to: `${__dirname}/dist/assets/font` },
    //     { from: `${__dirname}/assets/lottie`, to: `${__dirname}/dist/assets/lottie` },
    //     { from: `${__dirname}/assets/favicon`, to: `${__dirname}/dist` }
    //   ]),
  ],
};