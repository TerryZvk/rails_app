import React from "react";
import { Menu, Icon } from 'antd';
import axios from 'axios';
  
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  handleLogOut = () => {
    axios.delete('/logout')
    .then((res) => {
      window.location.href = '/'
    }).catch((e) => {
      console.log('failed')
    })
  }

  render() {
    return (
      <div className="nav-menu">
        { this.props.loggedIn ? 
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <a href="/">主站</a>
            </Menu.Item>
            <SubMenu title={this.props.user.name}>
              <Menu.Item key="关于我">
                <a href={'/users/' + this.props.user.id}>关于我</a>
              </Menu.Item>
              <Menu.Item key="设置">
                <a href={'/users/' + this.props.user.id + '/edit'}>设置</a>
              </Menu.Item>
              <Menu.Item key="登出"　onClick={this.handleLogOut}>
                登出
              </Menu.Item>
            </SubMenu>  
          </Menu> : 
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <a href="/"rel="home">主站</a>
            </Menu.Item>
            <Menu.Item key="login">
              <a href='/login'>登录</a>
            </Menu.Item>  
            <Menu.Item key="signup">
              <a href='/signup'>注册</a>
            </Menu.Item>  
          </Menu> 
        }
      </div> 
    );
  }
}