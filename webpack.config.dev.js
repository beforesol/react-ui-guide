module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8888,
    hot: true,
    historyApiFallback: true,
    open: true,
    disableHostCheck: true
  }
};
