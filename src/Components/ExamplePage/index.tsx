/**
 * @Description: 主页测试
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:14:08
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 15:06:53
 */

import * as React from 'react';
import * as PageCss from './css/index.scss';
import { Link } from 'react-router-dom';

// const ArticleDetailsPage = React.lazy((): Promise<any> => import(/* webpackChunkName: 'ArticleDetailsPage'*/ '../ArticleDetailsPage')); // eslint-disable-line

export default class Hello extends React.Component {
  public render(): JSX.Element {

    return (
      <React.Suspense fallback={<div>加载中....</div> }>
        <div>
          <div className={PageCss.title}>哈哈哈</div>
          <Link to="/article">文案</Link>
          {/* <ArticleDetailsPage></ArticleDetailsPage> */}
        </div>
      </React.Suspense>

    );
  }
}
