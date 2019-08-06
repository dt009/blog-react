/**
 * @Description: 标题组件
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-08-06 14:13:59
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-06 14:24:21
 */

import * as React from 'react';
import * as CompCss from './style.scss';

interface TitleProps {
  children: string | JSX.Element;
}

const TitleComp = (props: TitleProps): JSX.Element => (
  <h2 className={CompCss.container}>{ props.children }</h2>
);

export default TitleComp;
