const path = require('path');
const webpack = require('webpack');
const UitSpritesmithWebpack = require('@uit-spritesmith/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const root = path.resolve(__dirname);

const commonCSSLoaderOptions = {
  importLoaders: 2,
  url: false
};

const cssLoaderOptions = {
  ...commonCSSLoaderOptions,
  modules: false
};

const scssLoaderOptions = {
  ...commonCSSLoaderOptions,
  modules: true,
  localIdentName: '[local]--[hash:base64:5]'
};

const postCSSLoaderOptions = {
  ident: 'postcss',
  plugins: () => [autoprefixer(),],
};

module.exports = {
  entry: ['./src/index.jsx'],
  resolve: {
    alias: {
      '@assets': `${root}/assets`,
    },
    extensions: ['.js', '.jsx', '.json', 'scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env', {
                    targets: { node: 'current' }, // 노드일 경우만
                    modules: 'false'
                  }
                ],
                '@babel/preset-react',
              ]
            }
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: cssLoaderOptions },
        ],
      },
      {
        test: /\.(scss)$/,
        include: path.resolve(__dirname, './src'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: scssLoaderOptions },
          { loader: 'postcss-loader', options: postCSSLoaderOptions },
          { loader: 'sass-loader' },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new UitSpritesmithWebpack({
    //   spriteSrc: path.resolve(__dirname, './assets/sprite'),
    //   spriteDest: path.resolve(__dirname, './assets/img/sprite'),
    //   cssDest: path.resolve(__dirname, './assets/scss/sprite'),
    //   imgURL: '/assets/img/sprite',
    //   prefix: 'sp_',
    //   ratio: 3,
    //   padding: 3,
    // }),
  ],
};