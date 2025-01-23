import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const navigateToLogin = () => {
  console.log('Navigate to Login Page'); // Replace with actual navigation logic
};

const Register = () => (
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
        padding: '5%',
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
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '1rem',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
          }}
        >
          Register
        </h2>
        <Form
          name="register"
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
          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              name="firstName"
              label="First Name"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
              style={{ display: 'inline-block', width: '48%' }}
            >
              <Input
                style={{
                  borderRadius: '8px',
                  padding: '10px',
                  border: '2px solid #ddd',
                }}
              />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}
              style={{
                display: 'inline-block',
                width: '48%',
                marginLeft: '4%',
              }}
            >
              <Input
                style={{
                  borderRadius: '8px',
                  padding: '10px',
                  border: '2px solid #ddd',
                }}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
              {
                type: 'number',
                min: 1,
                max: 120,
                transform: (value) => Number(value),
                message: 'Age must be a number between 1 and 120!',
              },
            ]}
          >
            <Input
              type="number"
              style={{
                borderRadius: '8px',
                padding: '10px',
                border: '2px solid #ddd',
              }}
            />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
              {
                pattern: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits!',
              },
            ]}
          >
            <Input
              style={{
                borderRadius: '8px',
                padding: '10px',
                border: '2px solid #ddd',
              }}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                type: 'email',
              },
            ]}
          >
            <Input
              style={{
                borderRadius: '8px',
                padding: '10px',
                border: '2px solid #ddd',
              }}
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
                borderRadius: '8px',
                padding: '10px',
                border: '2px solid #ddd',
              }}
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two passwords do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password
              style={{
                borderRadius: '8px',
                padding: '10px',
                border: '2px solid #ddd',
              }}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ textAlign: 'left' }}
          >
            <Checkbox style={{ color: '#555' }}>
              I agree to the terms and conditions
            </Checkbox>
          </Form.Item>

          <Form.Item>
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
            >
              Register
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="link"
              onClick={navigateToLogin}
              style={{
                display: 'inline-block',
                width: 'auto',
                textAlign: 'center',
                color: '#ff9a9e',
                fontWeight: 'bold',
                padding: '5px 10px', // Smaller button
              }}
            >
              Already have an account? Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
);

export default Register;
