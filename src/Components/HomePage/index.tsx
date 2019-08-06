/**
 * @Description: 博客主页
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-08-05 15:56:44
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-06 15:30:21
 */

import * as React from 'react';
import {
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import * as PageCss from './style.scss';
import {
  Menu,
  BackTop,
} from 'antd';
import ArticleListPage from '../ArticleListPage/index';

const MenuList = [
  {
    value: '主页',
    key: 'Home',
    path: '/',
  },
  {
    value: '关于我',
    key: 'About',
    path: '/about',
  },
  {
    value: '分类',
    key: 'Category',
    path: 'category',
  },
  {
    value: '标签',
    key: 'Tag',
    path: 'tag',
  }
];

interface HomePageProps  {
  [key: string]: string;
}

class HomePage extends React.Component<HomePageProps, {currentMenuKey: string}> {

  public constructor(props: HomePageProps) {
    super(props);
    this.state = {
      currentMenuKey: 'Home'
    };
  }

  public componentDidMount(): void {
    console.log(this.props); // eslint-disable-line
  }

  public handleSelectMenu = (evt: {key: string}): void => {
    this.setState({
      currentMenuKey: evt.key,
    });
  }

  public render(): JSX.Element {
    return (
      <div  className={PageCss.container}>
        <header style={{ position: 'sticky', top: 0, zIndex: 10000 }}>
          <Menu
            selectedKeys={[this.state.currentMenuKey]}
            mode="horizontal"
            theme="dark"
            onClick={this.handleSelectMenu}
            style={{
              color: '#fff',
              background: '#4a77f8',
              fontSize: '0.4rem',
              height: '0.8rem',
              lineHeight: '0.8rem',
            }}
          >
            {
              MenuList.map((item): JSX.Element => {
                const Value = item.value;
                return (
                  <Menu.Item key={ item.key }><Link to={item.path}>{Value}</Link></Menu.Item>
                );
              })
            }
          </Menu>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={(): JSX.Element => <Redirect to="/home" />} />
            <Route path="/home" component={ ArticleListPage } />
          </Switch>
        </main>
        <BackTop visibilityHeight={100} className={PageCss.BackTop} />
      </div>
    );
  }
}

export default HomePage;
