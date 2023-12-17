import { Menu } from "antd";
import { useNavigate, useLocation } from 'react-router-dom'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useState } from "react";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Option 1',
    key: '/page1',
    icon: <PieChartOutlined />,
  },
  {
    label: 'Option 2',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: 'User',
    key: '/sub1',
    icon: <UserOutlined />,
    children: [
      { label: 'Tom', key: '3' },
      { label: 'Bill', key: '4' },
      { label: 'Alex', key: '5' },
    ]
  },
  {
    label: 'Team',
    key: 'sub2',
    icon: <TeamOutlined />,
    children: [
      { label: 'Team 1', key: '6' }
    ]
  },
  {
    label: 'Files',
    key: '9',
    icon: <FileOutlined />,
  },
]

const MainMenu = () => {
  let firstOpenKey: string = "";
  const useNavigateTo = useNavigate();
  const currentRoute = useLocation(); //当前的路由
  const menuClick = (e: { key: string }) => {
    //点击跳转对应路由
    useNavigateTo(e.key);
  }

  const openKeysMath = (obj: { key: string }) => {
    return obj.key === currentRoute.pathname;
  }
  for (let i = 0; i < items.length; i++) {
    let item = items[i]!['children']
    if (item && item.length > 0 && item.find(openKeysMath)) {
      firstOpenKey = items[i]!.key as string;
      break;
    }
  }

  // 展开项初始值
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  // 菜单展开回收控制
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]])
  }

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      // 展开回收控制
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
    />
  )
}
export default MainMenu