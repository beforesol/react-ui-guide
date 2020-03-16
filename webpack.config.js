const webpackMerge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.config.common');
const webpackDevConfig = require('./webpack.config.dev');
const webpackProdConfig = require('./webpack.config.prod');

const MODE = {
  DEV: 'development',
  PROD: 'production',
};

module.exports = function (env = {}, argv) {
  const { mode } = argv;

  switch (mode) {
    case MODE.DEV:
      {
        return webpackMerge(webpackCommonConfig, webpackDevConfig);
      }

    case MODE.PROD:
      {
        return webpackMerge(webpackCommonConfig, webpackProdConfig);
      }

    default:
      throw new Error('invalid MODE');
  }
};
