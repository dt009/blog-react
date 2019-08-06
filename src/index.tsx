/**
 * @Description: 入口页面
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:13:26
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 18:24:31
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import setHtmlFont from './utils/adaptive/index';
import './public/css/dt.reset.css';

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
          <HomePage></HomePage>
        </Router>
      </React.Suspense>
    );
  }
}

ReactDOM.render(<APP />, document.getElementById('app'));
