import React from "react";
import { Form, Modal, Input, Button } from 'antd';
 
export default class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  errWaring = (text) => {
    Modal.warning({
      title: text
    })
  };

  validForm = (state) => {
    if(state.name == ''){
      this.errWaring("用户名必须填写");
      return false;
    };
    if(state.email == ''){
      this.errWaring("邮箱必须填写");
      return false;
    };
    if(state.password.length < 6){
      this.errWaring("密码必须填写且至少为6位数");
      return false;
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.validForm(this.state) !== true){
      return false;
    };
  }

  handleName = (e) => {
    this.setState({name: e.target.value})
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }
  
  render() {
    return (
     <Form action="/users" method="post" onSubmit={this.handleSubmit} name='user'className="signup-form">
      <label htmlFor="name">Name</label>
      <Input type="text" name="name" value={this.state.name} onChange={this.handleName}/>
      <label htmlFor="email">Email</label>
      <Input type="text" name="email" value={this.state.email} onChange={this.handleEmail}/>
      <label htmlFor="password">Password</label>
      <Input type="text" name="password" value={this.state.password} onChange={this.handlePassword}/>
      <Button type="primary" className="submit-form" onClick={this.handleSubmit}>提交</Button>
     </Form>
    );
  }
}