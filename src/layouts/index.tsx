import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.scss';
{
  /* <HomeOutlined /> */
}
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const logoSvg = require('./react.svg');

const BasicLayout: React.FC = (props) => {
  console.log(props);

  const [collapsed, setCollapsed] = useState(false);
  return props.children;
  // <Layout>
  //   {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
  //   <Sider width={200}>
  //     <a className="logo"><img width={16} height={16} src={logoSvg} />Vue Admin Pro</a>
  //     <Menu mode="inline" theme="dark">
  //       <Menu.Item key="1"><Icon type="home" />首页</Menu.Item>
  //       <Menu.Item key="2"><Icon type="appstore" />看板</Menu.Item>
  //       <Menu.Item key="3"><Icon type="setting" />工作台</Menu.Item>
  //     </Menu>
  //   </Sider>
  //   <Layout>
  //     <Header style={{ background: '#fff' }}>
  //       <Icon
  //           className="trigger"
  //           type={collapsed ? 'menu-unfold' : 'menu-fold'}
  //           // onClick={this.toggle}
  //         />
  //     </Header>
  //     <Layout style={{ padding: '0 0 24px' }}>
  //       <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 'calc(100vh - 88px' }}>
  //         {props.children}
  //       </Content>
  //     </Layout>
  //   </Layout>
  // </Layout>
};

export default BasicLayout;
