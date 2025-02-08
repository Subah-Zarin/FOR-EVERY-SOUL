import React from 'react';
import NavBar from '../components/NavBar';
import { Button, Checkbox, Input, message } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  // Function to navigate to the login page
  const navigateToLogin = () => {
    navigate('/login');
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Please input your first name!'),
    lastName: Yup.string().required('Please input your last name!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please input your email!'),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{8}$/,
        'Password must be exactly 8 characters and contain both letters and numbers.'
      )
      .required('Please input your password!'),
    remember: Yup.boolean(),
  });

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
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            remember: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('Registration successful:', values);
            message.success('Registration successful!');
            navigate('/account');
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* First and Last Name Fields */}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '4%' }}>
                <div style={{ width: '48%' }}>
                  <label htmlFor="firstName">First Name</label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#ddd';
                      handleBlur(e);
                    }}
                    style={{
                      borderRadius: '8px',
                      padding: '10px',
                      border: '2px solid #ddd',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
                  />
                  {errors.firstName && touched.firstName && (
                    <div style={{ color: 'red', marginBottom: '0.5rem' }}>{errors.firstName}</div>
                  )}
                </div>
                <div style={{ width: '48%' }}>
                  <label htmlFor="lastName">Last Name</label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#ddd';
                      handleBlur(e);
                    }}
                    style={{
                      borderRadius: '8px',
                      padding: '10px',
                      border: '2px solid #ddd',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
                  />
                  {errors.lastName && touched.lastName && (
                    <div style={{ color: 'red', marginBottom: '0.5rem' }}>{errors.lastName}</div>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div style={{ marginTop: '1rem' }}>
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                    handleBlur(e);
                  }}
                  style={{
                    borderRadius: '8px',
                    padding: '10px',
                    border: '2px solid #ddd',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
                />
                {errors.email && touched.email && (
                  <div style={{ color: 'red', marginBottom: '0.5rem' }}>{errors.email}</div>
                )}
              </div>

              {/* Password Field */}
              <div style={{ marginTop: '1rem' }}>
                <label htmlFor="password">Password</label>
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
                    borderRadius: '8px',
                    padding: '10px',
                    border: '2px solid #ddd',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#66a6ff')}
                />
                {errors.password && touched.password && (
                  <div style={{ color: 'red', marginBottom: '0.5rem' }}>{errors.password}</div>
                )}
              </div>

              {/* Terms and Conditions Checkbox */}
              <div style={{ marginTop: '1rem', textAlign: 'left' }}>
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={values.remember}
                  onChange={(e) => setFieldValue('remember', e.target.checked)}
                  onBlur={handleBlur}
                  style={{ color: '#555' }}
                >
                  I agree to the terms and conditions
                </Checkbox>
              </div>

              {/* Register Button */}
              <div style={{ marginTop: '1rem' }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isSubmitting}
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
              </div>

              {/* Link to Login */}
              <div style={{ marginTop: '1rem' }}>
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
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
