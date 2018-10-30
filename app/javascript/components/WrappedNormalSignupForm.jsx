import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class SignupForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form" layout='horizontal'>
        <FormItem layout='horizontal'>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem layout='horizontal'>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem layout='horizontal'>
          <Button type="primary" htmlType="submit" className="signup-form-button">
            注册
          </Button>
      
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalSignupForm = Form.create()(SignupForm);

export default WrappedNormalSignupForm;