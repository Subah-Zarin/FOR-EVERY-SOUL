import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const App = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)', // Gradient background
      animation: 'fadeIn 2s ease-in-out', // Fade-in effect for the container
    }}
  >
    <div
      style={{
        padding: '10%',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Enhanced shadow for depth
        transform: 'scale(1)',
        transition: 'transform 0.3s', // Add hover effect on the box
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div
        style={{
          width: '80%',
          maxWidth: '600px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
          }}
        >
          Welcome Back
        </h2>
        <Form
          name="basic"
          style={{
            width: '100%',
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              style={{
                width: '100%',
                borderRadius: '8px',
                padding: '10px',
                border: '2px solid #ddd',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#ff9a9e')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              style={{
                width: '100%',
                borderRadius: '8px',
                padding: '10px',
                border: '2px solid #ddd',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#fad0c4')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            label={null}
            style={{ textAlign: 'left' }}
          >
            <Checkbox style={{ color: '#555' }}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #fad0c4, #ff9a9e)',
                border: 'none',
                borderRadius: '8px',
                padding: '10px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(135deg, #ff9a9e, #fad0c4)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(135deg, #fad0c4, #ff9a9e)')
              }
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
);

export default App;