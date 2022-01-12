import React, { useState } from 'react';
import './Dashboard.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import RouteAdmin from '../../Routes/RouteAdmin/RouteAdmin';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Link to="/">
          <div className="logo" />
        </Link>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <NavLink end to="products">
              List Products
            </NavLink>
          </Menu.Item>
          <SubMenu key="sub1" icon={<PlusOutlined />} title="Add">
            <Menu.Item key="3">
              <NavLink end to="add-product">
                Add Product
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink end to="add-category">
                Add Category
              </NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <RouteAdmin />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
