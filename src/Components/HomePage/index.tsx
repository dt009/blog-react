/**
 * @Description: 博客主页
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-08-05 15:56:44
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-05 16:09:58
 */

import * as React from 'react';
import * as PageCss from './style.scss';

const MenuList = [
  '主页',
  '关于我',
  '分类',
  '标签'
];

class HomePage extends React.Component {

  public render(): JSX.Element {
    return (
      <div className={PageCss.container}>
        <header>
          <ul>
            {
              MenuList.map((item, idx): JSX.Element => {
                const value = item;
                return (
                  <li key={ idx }> { value } </li>
                );
              })
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default HomePage;
