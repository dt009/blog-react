/**
 * @Description: Do not edit
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-07-23 22:14:08
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-07-31 11:44:32
 */

import * as React from 'react';
import * as PageCss from './index.scss';
import './test.scss';
import * as ImgIcon from './img2.jpg';
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
      <h1 className={`${ PageCss.title } ${ PageCss.container } title`}>
        Hello { this.state.name } from { this.props.compiler } and { this.props.framework }!
        <img src={ImgIcon} alt=""/>
      </h1>
    );
  }
}
