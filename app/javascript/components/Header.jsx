import React from "react";
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
  
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'mail',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="nav-menu">
        <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
          <Menu.Item key="home">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">主站</a>
          </Menu.Item>
          <Menu.Item key="app">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">画友</a>
          </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />音频</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">游戏中心</a>
          </Menu.Item>
          <Menu.Item key="online">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">直播</a>
          </Menu.Item>
          <Menu.Item key="vip">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">会员购</a>
          </Menu.Item>
          <Menu.Item key="download">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">下载APP</a>
          </Menu.Item>
          <Menu.Item key="login">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">登录</a>
          </Menu.Item>
          <Menu.Item key="history">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">历史</a>
          </Menu.Item>
          <Menu.Item key="upload">
            <a href="/upload" target="_blank" rel="noopener noreferrer">投稿</a>
          </Menu.Item>  
        </Menu>
      </div>
      
    );
  }
}