import React, { useState } from 'react';
import { Table, Button, Layout, Row, Col, Input, Form } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import UserCreateDialog from './user-create-dialog';
import './index.scss';

const { Content } = Layout;
const FormItem = Form.Item;

const UserManagement: React.FC = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const onSelectChange = () => {};
  const rowSelection = {
    // selectedRowKeys: '',
    onChange: onSelectChange,
  };
  const showCreateDialog = () => {
    setDialogVisible(true);
  };
  const handleDialogCancel = () => {
    setDialogVisible(false);
  };

  const tableCols: Array<ColumnType<any>> = [
    { dataIndex: 'idx', title: '序号', render: (_v, _, idx) => idx + 1 },
    { dataIndex: 'id', title: 'id' },
    { dataIndex: 'username', title: '用户名' },
    { dataIndex: 'email', title: '邮箱' },
    { dataIndex: 'role', title: '角色' },
    {
      dataIndex: 'updateTime',
      title: '修改时间',
      render: (v) => dayjs(v).format('YYYY-MM-DD'),
    },
    {
      dataIndex: 'action',
      title: '操作',
      width: 180,
      render: () => {
        return (
          <>
            <Button type="link">编辑</Button>
            <Button type="link">删除</Button>
          </>
        );
      },
    },
  ];
  return (
    <Content className="user-management-container">
      <Row className="user-management-action">
        <Col span={12}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ marginRight: 15 }}
            onClick={showCreateDialog}
          >
            添加
          </Button>
          <Button type="primary" danger icon={<PlusOutlined />}>
            批量删除
          </Button>
        </Col>
        <Col span={12}>
          <Form layout="inline" name="inline">
            <FormItem name="searchUserName">
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Button type="primary" icon={<SearchOutlined />}>
                搜索
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
      <Table
        className="user-table"
        bordered
        rowSelection={rowSelection}
        columns={tableCols}
        dataSource={[
          {
            id: 111,
            username: '尼克',
            email: '13213@qq.com',
            role: 'admin',
            updateTime: 1626163504038,
          },
        ]}
        pagination={{
          current: 1,
          pageSize: 20,
          total: 120,
          showQuickJumper: true,
        }}
      />
      <UserCreateDialog
        visible={dialogVisible}
        title="添加"
        onCancel={handleDialogCancel}
      />
    </Content>
  );
};

export default UserManagement;
