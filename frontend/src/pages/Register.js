import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); 

  const onFinish = (values) => {
    const passwordRegex = /^[A-Za-z0-9]{8}$/;

    if (passwordRegex.test(values.password)) {
      console.log('Registration successful:', values);
      message.success('Registration successful!');
      // Navigate to the Account page after successful registration
      navigate('/account');
    } else {
      message.error('Password must be exactly 8 characters and contain both letters and numbers.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
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
          padding: '5%',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)', 
          transition: 'transform 0.3s',
          maxWidth: '500px',
          width: '90%', 
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '1rem',
            fontFamily: "'Poppins', sans-serif",
            color: '#333',
            fontWeight: '700',
            fontSize: '1.8rem',
          }}
        >
          Create Your Account
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#555',
            fontSize: '1rem',
            marginBottom: '2rem',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Join us and make a difference!
        </p>
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
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
                onBlur={(e) => (e.target.style.borderColor = '#ddd')}
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
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
                onBlur={(e) => (e.target.style.borderColor = '#ddd')}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            labelCol={{ span: 24 }}
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
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            labelCol={{ span: 24 }}
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
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ textAlign: 'left' }}
          >
            <Checkbox style={{ color: '#555' }} >
              I agree to the terms and conditions
            </Checkbox>
          </Form.Item>

          <Form.Item>
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
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(135deg, #89f7fe, #66a6ff)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(135deg, #66a6ff, #89f7fe)')
              }
            >
              Register
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="link"
              onClick={navigateToLogin}
              style={{
                display: 'block',
                textAlign: 'center',
                color: '#66a6ff',
                fontWeight: 'bold',
              }}
            >
              Already have an account? Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
