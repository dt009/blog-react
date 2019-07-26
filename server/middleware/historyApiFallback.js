/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:10:18
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-07-25 16:09:48
 */
const history = require('connect-history-api-fallback');

module.exports = options => {
  const middleware = history(options);
  const noop = ()  => {
  };

  return async (ctx, next) => {
    middleware(ctx, null, noop);
    await next();
  };
};
