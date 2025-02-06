import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';

// Handle form submission
const onFinish = (values) => {
  const passwordRegex = /^[A-Za-z0-9]{8}$/; 

  if (passwordRegex.test(values.password)) {
    console.log('Login successful:', values);
    message.success('Login successful!');
  } else {
    message.error('Password must be exactly 8 characters and contain letters and numbers.');
  }
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #89f7fe, #66a6ff)', 
      animation: 'fadeIn 2s ease-in-out', 
    }}
  >
    <div
      style={{
        padding: '10% 5%',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)', 
        transform: 'scale(1)',
        transition: 'transform 0.3s', 
        width: '90%',
        maxWidth: '600px',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontFamily: `'Poppins', sans-serif`,
          color: '#333',
          fontSize: '2.2rem', 
          fontWeight: '600',
        }}
      >
        Welcome Back!
      </h2>
      <p
        style={{
          textAlign: 'center',
          color: '#555',
          fontSize: '1rem',
          marginBottom: '2rem',
          fontFamily: `'Roboto', sans-serif`,
        }}
      >
        Log in to access your personalized dashboard and start exploring.
      </p>
      <Form
        name="login"
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
            onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
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
            onFocus={(e) => (e.target.style.borderColor = '#89f7fe')}
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
              background: 'linear-gradient(135deg, #66a6ff, #89f7fe)',
              border: 'none',
              borderRadius: '8px',
              padding: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'linear-gradient(135deg, #89f7fe, #66a6ff)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'linear-gradient(135deg, #66a6ff, #89f7fe)')
            }
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Login;
