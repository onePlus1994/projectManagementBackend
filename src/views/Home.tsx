import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Sider, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const breadcrumbItem = [
  { title: 'User' },
  { title: 'Application List' },
  { title: 'An Application' },
  { title: 'Bill' }
]

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const logSty = {
    height: '32px',
    margin: '16px',
    background: 'rgba(255,255,255,0.3)'
  }
  const useNavigateTo = useNavigate()
  const menuClick = (e: { key: string }) => {
    console.log(e)
    //点击跳转对应路由
    useNavigateTo(e.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={logSty} className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: '20px', background: colorBgContainer, marginBottom: '16px' }} >
          <Breadcrumb style={{ lineHeight: '64px' }} items={breadcrumbItem} />
        </Header>
        <Content style={{ margin: '0 16px', background: colorBgContainer, borderRadius: borderRadiusLG }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Home