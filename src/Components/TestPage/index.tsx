/**
 * @Description: markdown 测试
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-08-01 15:23:14
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 11:41:58
 */

import * as React from 'react';
import * as PageCss from './style.scss';

export interface HelloProps {
  compiler: string;
  framework: string;
  onClick: any; // eslint-disable-line
}

class Dome extends React.Component<HelloProps, {name: string}> {
  public render(): JSX.Element {
    return (
      <div className={PageCss.container} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Dome;
