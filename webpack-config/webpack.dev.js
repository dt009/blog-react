/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:10:32
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-07-25 16:15:54
 */

const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          { loader: 'source-map-loader' }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src/Components'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // module: {
              //   mode: 'local',
              //   localIdentName: '[path][name]-[local]-[hash:base64:6]',
              // }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  overrideBrowserslist: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // module: {
              //   mode: 'local',
              //   localIdentName: '[path][name]-[local]-[hash:base64:6]',
              // }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  overrideBrowserslist: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: true
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: '.dist',
    port: 3000,
    historyApiFallback: true,
  }
});
