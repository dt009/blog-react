/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:14:08
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-01 19:03:16
 */

import * as React from 'react';
import * as PageCss from './css/index.scss';
import * as ImgIcon from './img2.jpg';
import Test from '../../doc/index.md';
import './css/dt.markdown.css';
// import * as md from 'markdown-it';

export interface HelloProps { compiler: string; framework: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {name: string}> {
  public constructor(props: HelloProps) {
    super(props);
    this.state = {
      name: '段涛'
    };
  }
  public render(): object {

    return (
      <div className="doc">
        <h1 className={`${ PageCss.title } ${ PageCss.container } title`}>
          Hello { this.state.name } from { this.props.compiler } and { this.props.framework }!
          <img src={ImgIcon} alt=""/>
        </h1>
        {/* <div dangerouslySetInnerHTML={{ __html: Test }}></div> */}
        <div className="markdown-body">
          <Test />
        </div>
      </div>

    );
  }
}
