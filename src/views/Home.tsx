import { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom'
import MainMenu from '@/components/MainMenu';
const { Header, Content, Sider, Footer } = Layout;

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
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={logSty} className="demo-logo-vertical" />
        <MainMenu />
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