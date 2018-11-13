import React from "react";
import {Menu, Icon} from 'antd';
import 'whatwg-fetch';
  
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class LoggedInHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'mail',
      profileUrl: '/users/' + props.user.id + '/edit'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  handleLogOut = () => {
    fetch('/logout', {
      method: 'DELETE'
    }).then(() => {
      console.log('log out!')
    }).catch((e) => {
      console.log('failed')
    })
  }

  render() {
    return (
      <div className="nav-menu">
        <Menu
            onClick={this.handleLogOut}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
          <Menu.Item key="home">
                <a href="/" target="_blank" rel="noopener noreferrer">主站</a>
          </Menu.Item>
          <Menu.Item key="app">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">画友</a>
          </Menu.Item>
          <Menu.Item key="music">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">音频</a>
          </Menu.Item>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">游戏中心</a>
          </Menu.Item>
          <Menu.Item key="online">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">直播</a>
          </Menu.Item>
          <Menu.Item key="vip">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">会员购</a>
          </Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />会员</span>}>
            <MenuItemGroup title="后台">
              <Menu.Item key="setting:1" >
                <a href={this.state.profileUrl} target="_blank" rel="noopener noreferrer">账户</a>
              </Menu.Item>
              <Menu.Item key="setting:2">设置</Menu.Item>
              <Menu.Item key="setting:3">登出</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
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