import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Checkbox, Button, message } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  // Define the validation schema using Yup.
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please input your username!'),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{8}$/,
        'Password must be exactly 8 characters and contain letters and numbers.'
      )
      .required('Please input your password!'),
    remember: Yup.boolean(),
  });

  // Handle form submission by calling the backend login endpoint.
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies if your backend uses them
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // On successful login, store the username in localStorage
    localStorage.setItem('username', values.username);
    
      message.success('Login successful!');
      navigate('/profile');
    } catch (error) {
      message.error(error.message);
    } finally {
      setSubmitting(false);
    }
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
      <NavBar />
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
        <Formik
          initialValues={{ username: '', password: '', remember: true }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* Username Field */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="username"
                  style={{ display: 'block', marginBottom: '0.5rem' }}
                >
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                    handleBlur(e);
                  }}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    padding: '10px',
                    border: '2px solid #ddd',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
                />
                {errors.username && touched.username && (
                  <div style={{ color: 'red', marginTop: '0.5rem' }}>
                    {errors.username}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="password"
                  style={{ display: 'block', marginBottom: '0.5rem' }}
                >
                  Password
                </label>
                <Input.Password
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                    handleBlur(e);
                  }}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    padding: '10px',
                    border: '2px solid #ddd',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#89f7fe')}
                />
                {errors.password && touched.password && (
                  <div style={{ color: 'red', marginTop: '0.5rem' }}>
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Remember Me Checkbox */}
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <Checkbox
                  name="remember"
                  checked={values.remember}
                  onChange={(e) =>
                    handleChange({
                      target: { name: 'remember', value: e.target.checked },
                    })
                  }
                >
                  Remember me
                </Checkbox>
              </div>

              {/* Submit Button */}
              <Button
                type="primary"
                disabled={isSubmitting}
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
                  (e.currentTarget.style.background =
                    'linear-gradient(135deg, #89f7fe, #66a6ff)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    'linear-gradient(135deg, #66a6ff, #89f7fe)')
                }
                htmlType="submit"
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
