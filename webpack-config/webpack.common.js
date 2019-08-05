/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:10:32
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 15:41:34
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
        common: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[name].[chunkhash:6].js',
          chunks: 'all',
        },
        styles: {
          // filename: 'css/[name].css',
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
    chunkFilename: 'js/[name].[chunkhash:6].js',
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
    ],
    alias: {
      comp: path.resolve(__dirname, '../src/Component/'),
      utils: path.resolve(__dirname, '../src/utils/'),
      public: path.resolve(__dirname, '../src/public/'),
      common: path.resolve(__dirname, '../src/common/')
    },
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src/'),
        use: [
          { loader: 'awesome-typescript-loader' },
          { loader: 'eslint-loader' },
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src/'),
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
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: path.resolve(__dirname, './mylLoader/testLoader.js'),
            options: {
              type: 'react'
            }
          },
        ]
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
