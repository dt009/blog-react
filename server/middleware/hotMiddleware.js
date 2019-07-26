/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:10:18
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-07-23 22:10:18
 */

const webpackHot = require('webpack-hot-middleware');
const { PassThrough } = require('stream');

const hotMiddleware = (compiler, opts) => {
  const middleware = webpackHot(compiler, opts);
  return async (ctx, next) => {
    const stream = new PassThrough();
    ctx.body = stream;
    await middleware(ctx.req, {
      write: stream.write.bind(stream),
      writeHead: (status, headers) => {
        ctx.status = status;
        ctx.set(headers);
      }
    }, next);
  };
};

module.exports = hotMiddleware;
