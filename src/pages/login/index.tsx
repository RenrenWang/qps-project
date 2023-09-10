import { Button, Form, Input } from 'antd';
export default () => {
  return (
    <div>
      <Form>
        <Form.Item name="userName">
          <Input></Input>
        </Form.Item>
        <Form.Item name="password">
          <Input.Password />
        </Form.Item>
      </Form>
      <Form.Item>
        <Button type="primary">Button</Button>
      </Form.Item>
    </div>
  );
};
