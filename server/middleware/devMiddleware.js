/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:10:18
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-07-25 16:10:51
 */

const webpackDev  = require('webpack-dev-middleware');

const devMiddleware = (compiler, opts) => {
  const middleware = webpackDev(compiler, opts);
  return async (ctx, next) => {
    await middleware(ctx.req, {
      end: content => {
        ctx.body = content;
      },
      setHeader: (name, value) => {
        ctx.set(name, value);
      }
    }, next);
  };
};

module.exports = devMiddleware;
