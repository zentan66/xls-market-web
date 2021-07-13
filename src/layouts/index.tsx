import React, { SyntheticEvent, useState } from 'react';
import { Layout, Menu, Breadcrumb, Button, Tabs, Space, Row, Col } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  SettingOutlined,
  InboxOutlined,
  CopyrightOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
import './index.scss';
{
  /* <HomeOutlined /> */
}
const { SubMenu } = Menu;
const { TabPane } = Tabs;
const { Header, Sider, Content, Footer } = Layout;

const logoSvg = require('./react.svg');

const BasicLayout: React.FC = (props) => {
  console.log(12312);

  const [collapsed, setCollapsed] = useState(false);
  // return <Layout>
  //   {props.children}
  // </Layout>;
  const handleMenuClick = (evt: any) => {
    // console.log(...others);
    history.push(`/${evt.key}`);
  };

  const toggleCollapsed = () => {
    setCollapsed((s) => !s);
  };

  const callback = () => {};

  return (
    <Layout>
      <Sider width={360} collapsed={collapsed}>
        <a className="logo">
          <img width={16} height={16} src={logoSvg} />
          React Design Pro
        </a>
        <Menu mode="inline" theme="dark" onClick={handleMenuClick}>
          <Menu.Item key="index">首页</Menu.Item>
          <Menu.Item key="dashboard">看板</Menu.Item>
          <Menu.Item key="workbench">工作台</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <Row>
            <Col>
              <Button type="text" onClick={toggleCollapsed}>
                {!collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
              </Button>
            </Col>
            <Col>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane
                  tab={
                    <span>
                      <HomeOutlined />
                      首页
                    </span>
                  }
                  key="1"
                />
                <TabPane
                  tab={
                    <span>
                      <InboxOutlined />
                      其他
                    </span>
                  }
                  key="2"
                />
                <TabPane
                  tab={
                    <span>
                      <SettingOutlined />
                      配置
                    </span>
                  }
                  key="3"
                />
              </Tabs>
            </Col>
          </Row>
        </Header>
        <Layout style={{ padding: '0 0 24px' }}>
          <Content
            style={{
              background: '##f6f8f9',
              padding: 24,
              margin: 0,
              minHeight: 'calc(100vh - 88px',
            }}
          >
            {props.children}
            <Footer
              style={{ textAlign: 'center', background: '#fff', marginTop: 60 }}
            >
              Copyright <CopyrightOutlined /> React Ant Design 2021
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
