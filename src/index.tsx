/**
 * @Description: 入口页面
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:13:26
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 15:15:53
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setHtmlFont from './utils/adaptive/index';
// import  Hello from './Components/HomePage/index';
import * as Loadable from 'react-loadable';
// import ArticleDetailsPage from './Components/ArticleDetailsPage/index';
// const ArticleDetailsPage = React.lazy((): any => import('./Components/ArticleDetailsPage/index')); // eslint-disable-line
import './public/css/dt.reset.css';

const ArticleDetailsPage = Loadable({
  loader: (): any => import('./Components/ArticleDetailsPage/index'), // eslint-disable-line
  loading: (): JSX.Element => <div>哈哈哈....</div>, // eslint-disable-line
});

const Hello = Loadable({
  loader: (): any => import('./Components/HomePage/index'), // eslint-disable-line
  loading: (): JSX.Element => <div>哈哈哈....</div>, // eslint-disable-line
});

setHtmlFont();

class APP extends React.Component {
  /**
   * render
   */
  public render(): object {
    return (
      <React.Suspense fallback={<div>哈哈哈...</div>}>
        <Router>
          <Switch>
            <Route exact path="/hello" component={ Hello } />
            <Route exact path="/article" component={ ArticleDetailsPage } />
          </Switch>
        </Router>
      </React.Suspense>
    );
  }
}

ReactDOM.render(<APP />, document.getElementById('app'));
