/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:10:32
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-07-25 16:11:09
 */

const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: './src/index.js',
    react: 'react',
    reactDom: 'react-dom',
    reactRouterDom: 'react-router-dom'
  },

  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },

  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  module: {
    rules: [
      // {
      //     test: /\.css$/,
      //     use: [
      //         {
      //             loader: MiniCssExtractPlugin.loader,
      //             options: {
      //                 publicPath: '/'
      //             }
      //         },
      //         {loader: 'happypack/loader?id=css'},
      //     ]
      // }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ]
});
