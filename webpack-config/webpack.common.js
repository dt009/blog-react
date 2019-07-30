/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:10:32
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-07-29 17:02:05
 */

const webpack = require('webpack');
const path = require('path');
const config = require('../config/config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  optimization: {
    runtimeChunk: 'multiple',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendor: {
          filename: '[name].bundle.js',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.(scss|css)$/,
          chunks: 'all',
          enforce: true,
        },
      }
    }
  },
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
    react: 'react',
    reactDom: 'react-dom',
    reactRouter: 'react-router-dom'
  },

  output: {
    filename: 'js/[name].[chunkhash:6].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [
      '.ts', '.tsx', '.js', '.jsx',
      '.web.js', '.mjs', '.web.jsx',
      '.scss', '.css', '.json',
      '.jpg', '.png', '.gif', '.jpeg', '.svg',
    ]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'awesome-typescript-loader' },
          { loader: 'eslint-loader' },
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: 'image/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'iconfont/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: config.pageTitle
    }),
    new StyleLintPlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ]
};
