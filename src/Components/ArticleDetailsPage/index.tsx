/**
 * @Description: 博客文章详情
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-08-05 10:29:59
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 11:41:01
 */
import * as React from 'react';
import * as PageCss from './style.scss';

const Test = React.lazy((): any => import(/* webpackChunkName: 'abc'*/ '../../doc/index.md')); // eslint-disable-line

class ArticleDetailsPage extends React.Component {

  /**
   * render
   */
  public render(): JSX.Element {
    return (
      <React.Suspense fallback={<div>loading...</div>}>
        <div className={PageCss.container}>
          <h1>哈哈哈哈</h1>
          <Test></Test>
        </div>
      </React.Suspense>

    );
  }

}

export default ArticleDetailsPage;
