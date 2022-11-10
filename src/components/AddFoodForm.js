import { Divider, Form, Input, InputNumber, Row, Col, Button } from 'antd';
import { useState } from 'react';

export default function AddFoodForm({ setData, data }) {
  let [hide, setHide] = useState(false);
  const onFinish = (values) => {
    setData([...data, values]);
  };
  function handleButton() {
    setHide(!hide);
  }

  return (
    <Row>
      <Col offset={4} span={16}>
        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          style={hide ? { display: 'none' } : {}}
        >
          <Divider>Add Food Entry</Divider>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please fill the food's name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Image" name="image" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Calories"
            name="calories"
            rules={[{ required: true }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label="Servings"
            name="servings"
            rules={[{ required: true }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 8,
            }}
            rules={[{ required: true }]}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Button type="default" onClick={handleButton}>
          {hide ? 'Add New Food' : 'Hide Form'}
        </Button>
      </Col>
    </Row>
  );
}
