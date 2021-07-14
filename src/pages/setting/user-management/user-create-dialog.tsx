import React from 'react';
import styled from 'styled-components';
import { Modal, Form, Input, Checkbox } from 'antd';

const Dialog = styled(Modal)``;

const FormItem = Form.Item;

export interface IProps {
  title?: string;
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

const UserCreateDialog: React.FC<IProps> = ({
  title,
  visible,
  onOk,
  onCancel,
}) => {
  return (
    <Dialog title={title} visible={visible} onCancel={onCancel} onOk={onOk}>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
        <FormItem
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </FormItem>
        {/* <Input.Password /> */}
        <FormItem
          label="密码"
          name="pwd"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </FormItem>
        <FormItem
          label="邮箱"
          name="email"
          rules={[{ required: true, message: '请输入邮箱' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="角色"
          name="role"
          rules={[{ required: true, message: '请至少选择一个角色' }]}
        >
          <Checkbox.Group
            options={[
              { label: 'admin', value: 1 },
              { label: 'editor', value: 2 },
            ]}
          />
        </FormItem>
      </Form>
    </Dialog>
  );
};

export default UserCreateDialog;
