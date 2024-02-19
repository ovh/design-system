const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, options) => {
  return {
    devtool: options.mode === 'development' ? 'eval-source-map' : false,
    devServer: {
      historyApiFallback: true,
      port: 8080,
    },
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: ''
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[contenthash:base64:5]'
                }
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          type: 'asset/resource',
        }
      ]
    },
    output: {
      clean: true,
      filename: process.env.WEBPACK_SERVE ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebPackPlugin({
        base: '/',
        favicon: 'src/assets/images/favicon.png',
        filename: './index.html',
        template: './src/index.html',
        title: 'Test App React',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    ],
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src/app/'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    target: 'web',
  };
};
