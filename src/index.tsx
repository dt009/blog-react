/**
 * @Description: 入口页面
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:13:26
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 16:05:33
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import setHtmlFont from './utils/adaptive/index';
import './public/css/dt.reset.css';

import ArticleDetailsPage from './Components/ArticleDetailsPage/index';
import HomePage from './Components/HomePage/index';

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
            <Route exact path="/" render={(): JSX.Element => <Redirect to="/home" />} />
            <Route path="/home" component={ HomePage } />
            <Route path="/article" component={ ArticleDetailsPage } />
          </Switch>
        </Router>
      </React.Suspense>
    );
  }
}

ReactDOM.render(<APP />, document.getElementById('app'));
