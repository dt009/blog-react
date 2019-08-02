/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:13:26
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-02 16:28:48
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import setHtmlFont from './utils/adaptive/index';
import { Hello } from './Components/HomePage/index';
import './public/css/dt.reset.css';
setHtmlFont();

class APP extends React.Component {
  /**
   * render
   */
  public render(): object {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={ (): object => <Redirect to="/hello" /> } />
            <Route path="/hello" component={ Hello } />
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<APP />, document.getElementById('app'));
