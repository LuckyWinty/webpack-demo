import React from 'react'
import WrappedDemo from './component/FromTest'
import Menu from './component/Menu'
import { Card, Col, Row, Button } from 'antd';
import { hot } from 'react-hot-loader';
const Record = ()=>{

    return (
    <div style={{
      width:'500px',
      margin:'50px auto'
    }}>
      <h3>HRM Test!</h3>
      <WrappedDemo />
      {/* <div style={{ margin:'20px auto'}}>
      <Menu/>
      </div> */}
      <div style={{ background: '#ECECEC', padding: '30px' ,margin:'20px auto'}}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content ggg
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
      <Button onClick={()=>{
        // throw {msg:'error'};
      }}>click me will throw error</Button>
    </div>)
}
export default hot(module)(Record);