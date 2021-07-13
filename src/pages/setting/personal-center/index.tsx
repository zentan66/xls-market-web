import React from 'react';
import {
  Row,
  Col,
  Card,
  Image,
  Button,
  Divider,
  Tag,
  Tabs,
  Form,
  Input,
  Select,
} from 'antd';
import {
  UsergroupAddOutlined,
  UserOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  ManOutlined,
  CodeOutlined,
  QqOutlined,
  WechatOutlined,
  AlipayCircleOutlined,
  WeiboOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import './index.scss';

const avatar = require('@/assets/v2-30b1c5b4184119aef9c596a3b1818e61_1440w.jpg');
const { TabPane } = Tabs;
const { Option } = Select;
const FormItem = Form.Item;

// import './index.scss';
export default function () {
  const callback = () => {};
  const onGenderChange = () => {};

  return (
    <section>
      <div className="person-center-container">
        <Row gutter={2}>
          <Col span={8} style={{ marginRight: 20 }}>
            <Card hoverable>
              <div className="personal-info-center">
                <span className="avatar-container">
                  <Image src={avatar} height={100} width={100} alt="avatar" />
                </span>
                <div className="person-name">小明</div>
                <div className="person-desc">爱意随风起，风止意难平</div>
                <div className="person-follow">
                  <Button
                    type="primary"
                    shape="round"
                    icon={<UsergroupAddOutlined />}
                  >
                    Follow me
                  </Button>
                </div>
                <ul className="person-info-list">
                  <li>
                    <UserOutlined />
                    前端小菜
                  </li>
                  <li>
                    <GiftOutlined />
                    1996/05/04
                  </li>
                  <li>
                    <ManOutlined />男
                  </li>
                  <li>
                    <UserOutlined />
                    集团-事业群-技术部
                  </li>
                  <li>
                    <EnvironmentOutlined />
                    中国·浙江省·杭州市
                  </li>
                  <li>
                    <CodeOutlined />
                    JavaScript、HTML、CSS、Vue、Node
                  </li>
                  <li>
                    <div className="person-info-tags">
                      <Divider />
                      <h5>个性标签</h5>
                      <Tag color="magenta">外向</Tag>
                      <Tag color="red">乐观</Tag>
                      <Tag color="volcano">帅气</Tag>
                      <Tag color="orange">勇敢</Tag>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col span={15}>
            <Card hoverable>
              <Tabs defaultActiveKey="basic" onChange={callback}>
                <TabPane tab="基本信息" key="basic">
                  <Form
                    name="basic"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 10 }}
                    initialValues={{ remember: true }}
                  >
                    <FormItem label="姓名" name="username">
                      <Input defaultValue="小明" />
                    </FormItem>
                    <FormItem label="昵称" name="nickname">
                      <Input defaultValue="昵称111" />
                    </FormItem>
                    <FormItem label="性别" name="sex">
                      <Select
                        placeholder="请选择性别"
                        onChange={onGenderChange}
                        defaultValue="male"
                        allowClear
                      >
                        <Option value="male">男</Option>
                        <Option value="female">女</Option>
                        <Option value="other">隐藏</Option>
                      </Select>
                    </FormItem>
                    <FormItem label="个人简介" name="desc">
                      <Input.TextArea
                        defaultValue="富在术数，不在劳身；利在势居，不在力耕。"
                        rows={2}
                      />
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 3, span: 6 }}>
                      <Button type="primary" htmlType="submit">
                        保存
                      </Button>
                    </FormItem>
                  </Form>
                </TabPane>
                <TabPane tab="账号绑定" key="bangding">
                  <div className="person-center-item">
                    <QqOutlined
                      style={{ fontSize: '40px', color: 'rgb(52, 146, 237)' }}
                    />
                    <div className="person-center-item-content">
                      <div>绑定QQ</div>
                      <div className="person-center-item-content-second">
                        1204505056
                      </div>
                    </div>
                    <Button type="link">更换绑定</Button>
                  </div>
                  <Divider />
                  <div className="person-center-item">
                    <WechatOutlined
                      style={{ fontSize: '40px', color: 'rgb(77, 175, 41)' }}
                    />
                    <div className="person-center-item-content">
                      <div>绑定微信</div>
                      <div className="person-center-item-content-second">
                        当前未绑定绑定微信账号
                      </div>
                    </div>
                    <Button type="link">更换绑定</Button>
                  </div>
                  <Divider />
                  <div className="person-center-item">
                    <AlipayCircleOutlined
                      style={{ fontSize: '40px', color: 'rgb(20, 118, 254)' }}
                    />
                    <div className="person-center-item-content">
                      <div>绑定支付宝</div>
                      <div className="person-center-item-content-second">
                        当前未绑定绑定支付宝账号
                      </div>
                    </div>
                    <Button type="link">更换绑定</Button>
                  </div>
                  <Divider />
                  <div className="person-center-item">
                    <WeiboOutlined
                      style={{ fontSize: '40px', color: 'rgb(255, 212, 64)' }}
                    />
                    <div className="person-center-item-content">
                      <div>绑定微博</div>
                      <div className="person-center-item-content-second">
                        当前未绑定绑定微博账号
                      </div>
                    </div>
                    <Button type="link">更换绑定</Button>
                  </div>
                  <Divider />
                  <div className="person-center-item">
                    <GithubOutlined style={{ fontSize: '40px' }} />
                    <div className="person-center-item-content">
                      <div>绑定Github</div>
                      <div className="person-center-item-content-second">
                        当前未绑定绑定Github账号
                      </div>
                    </div>
                    <Button type="link">更换绑定</Button>
                  </div>
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
