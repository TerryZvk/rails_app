import React from "react";
import axios from 'axios';
import { Form, Modal, Input, Button } from 'antd';
 
class RegistrationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty: false
    }
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('/users', { 
          user: values 
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['password_confirmation'], { force: true });
    }
    callback();
  }

  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}> 
        <Form.Item
            {...formItemLayout}
            label="用户名"
          >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '请输入你的用户名!', whitespace: true 
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '不是有效的邮箱格式!',
            }, {
              required: true, message: '请输入你的邮箱!',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入你的密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('password_confirmation', {
            rules: [{
              required: true, message: '请确认你的密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">注册</Button>
      </Form>
    );
  }
}

const SignupForm = Form.create({ name: 'register' })(RegistrationForm);

export default SignupForm