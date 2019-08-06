/**
 * @Description: 文章列表页
 * @Author: 段涛
 * @AuthorEmail: 18363625031@163.com
 * @Date: 2019-08-06 10:06:23
 * @LastEditors: 段涛
 * @AuthorMobile: 18363625031
 * @LastEditTime: 2019-08-06 16:51:20
 */

import * as React from 'react';
// import {
//   Link,
// } from 'react-router-dom';
import * as PageCss from './style.scss';
import {
  AutoComplete,
  Icon,
  Input,
  List,
} from 'antd';
import TitleComp from '../../common/TitleComp/index';

const listData: {[key: string]: string}[] = [];
for (let idx = 0; idx < 23; idx++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${ idx }`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch), to help people create their product prototypes beautifully and efficiently.',
  });
}

class ArticleListPage extends React.Component {

  public render(): JSX.Element {
    return (
      <div className={PageCss.container}>
        <TitleComp>搜索</TitleComp>
        <div style={{ paddingTop: '0.2rem' }}>
          <AutoComplete
            dataSource={['123123', '2324324']}
            className={PageCss.autoCompleteCss}
            dropdownClassName={PageCss.autoCompleteDropDownCss}
            dropdownMatchSelectWidth={true}
            style={{ width: '6rem' }}
            size="large"
          >
            <Input
              size="large"
              suffix={<Icon type="search" className={PageCss.autoCompleteIconCss} />}
            />
          </AutoComplete>
        </div>
        <div>
          <List
            className={PageCss.ListCss}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page): void => console.log(page), // eslint-disable-line
              pageSize: 6,
              className: PageCss.paginationCss
            }}
            dataSource={listData}
            renderItem={(item): JSX.Element => (
              <List.Item
                key={item.title}
              >
                <List.Item.Meta
                  title={<div style={{ fontSize: '0.4rem' }}>{item.title}</div>}
                />
                <div style={{ fontSize: '0.28rem' }}>
                  {item.content}
                </div>
              </List.Item>
            )}
          />

        </div>

      </div>
    );
  }
}

export default ArticleListPage;
