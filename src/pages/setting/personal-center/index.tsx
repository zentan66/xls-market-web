import React from 'react';
import { Row, Col, Card, Image } from 'antd';
import './index.scss';

const avatar = require('@/assets/v2-30b1c5b4184119aef9c596a3b1818e61_1440w.jpg');
// import './index.scss';
export default function () {
  return (
    <section>
      <div className="person-center-container">
        <Row gutter={2}>
          <Col span={8}>
            <Card>
              <span className="avatar-container">
                <Image src={avatar} height={100} width={100} alt="avatar" />
              </span>
            </Card>
          </Col>
          <Col span={16}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas ut iusto similique deleniti recusandae eum sed odit, quaerat
            expedita laudantium consequuntur accusamus voluptate ratione,
            veniam, at non cum cumque.
          </Col>
        </Row>
      </div>
    </section>
  );
}
