/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:14:08
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-02 18:10:50
 */

import * as React from 'react';
import * as PageCss from './css/index.scss';
// import * as ImgIcon from './img2.jpg';
import Test from '../../doc/index.md';
import './css/dt.markdown.css';

export interface HelloProps { compiler: string; framework: string }

export class Hello extends React.Component<HelloProps, {name: string}> {
  public constructor(props: HelloProps) {
    super(props);
    this.state = {
      name: '段涛'
    };
  }
  public render(): object {

    return (
      <div>
        <div className={PageCss.title}>哈哈哈</div>
        <div className="doc">
          <div className="markdown-body">
            <Test />
          </div>
        </div>
      </div>
    );
  }
}
