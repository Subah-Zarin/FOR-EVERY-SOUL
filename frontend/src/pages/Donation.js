import React, { useEffect, useState } from 'react';
import { Button, Input, Form, message, Typography, Popover, Steps, Select } from 'antd';
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/donation.css';
import NavBar from '../components/NavBar'; 

import creditCardLogo from '../assets/credit-card.jpg';
import bankTransferLogo from '../assets/bank-transfer.png';
import bkashLogo from '../assets/bkash.jpeg';
import nagadLogo from '../assets/nagad.png';

const { Title } = Typography;

const Donation = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0); // ✅ Tracks form progress

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      message.error('You are not logged in!');
      navigate('/login');
    }
  }, [navigate]);

  // Form Validation Schema
  const validationSchema = Yup.object({
    donorName: Yup.string().required('Please enter your name!'),
    donorEmail: Yup.string().email('Invalid email format').required('Please enter your email!'),
    donorAddress: Yup.string().required('Please enter your address!'),
    donationAmount: Yup.number().required('Please enter the donation amount!').positive('Amount must be positive'),
    donationMethod: Yup.string().required('Please select a donation method!'),
    donationMessage: Yup.string().optional(),
  });

  // Function to update progress
  const updateProgress = (values) => {
    const totalFields = 6; // Total fields in form
    let filledFields = 0;

    Object.keys(values).forEach(key => {
      if (values[key] && values[key] !== '') {
        filledFields += 1;
      }
    });

    const newProgress = Math.round((filledFields / totalFields) * 100);
    setProgress(newProgress);
  };

  // Handle form submission
  const handleSubmit = (values) => {
    message.success('Thank you for your donation! Your contribution will make a difference.');
    setProgress(100); // ✅ Move to completion
    navigate('/');
  };

  // Custom stepper dot
  const customDot = (dot, { status, index }) => (
    <Popover content={<span>Step {index + 1}: {status}</span>}>{dot}</Popover>
  );

  return (
    <div className="donation-page">
      <NavBar />
      <div className="donation-form-container">
        <div className="donation-form">
          <Title level={1}>Make a Donation</Title>

          {/* ✅ Progress Bar */}
          <Steps current={progress / 25} progressDot={customDot} items={[
            { title: 'Start' },
            { title: 'Halfway' },
            { title: 'Almost Done' },
            { title: 'Completed' },
          ]} />

          <Formik
            initialValues={{
              donorName: '',
              donorEmail: '',
              donorAddress: '',
              donationAmount: '',
              donationMethod: '',
              donationMessage: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <FormikForm onChange={() => updateProgress(values)}>
                <Form.Item label="Name">
                  <Field as={Input} name="donorName" placeholder="Your Name" />
                  <ErrorMessage name="donorName" component="div" className="error-message" />
                </Form.Item>

                <Form.Item label="Email">
                  <Field as={Input} name="donorEmail" placeholder="Your Email" />
                  <ErrorMessage name="donorEmail" component="div" className="error-message" />
                </Form.Item>

                <Form.Item label="Address">
                  <Field as={Input} name="donorAddress" placeholder="Your Address" />
                  <ErrorMessage name="donorAddress" component="div" className="error-message" />
                </Form.Item>

                <Form.Item label="Donation Amount (BDT)">
                  <Field as={Input} type="number" name="donationAmount" placeholder="Enter Amount" />
                  <ErrorMessage name="donationAmount" component="div" className="error-message" />
                </Form.Item>

                <Form.Item label="Donation Method">
                  <Select
                    value={values.donationMethod}
                    onChange={(value) => { setFieldValue('donationMethod', value); updateProgress(values); }}
                    placeholder="Select Donation Method"
                  >
                    <Select.Option value="creditCard">
                      <img src={creditCardLogo} alt="Credit Card" className="payment-logo" /> Credit Card
                    </Select.Option>
                    <Select.Option value="bankTransfer">
                      <img src={bankTransferLogo} alt="Bank Transfer" className="payment-logo" /> Bank Transfer
                    </Select.Option>
                    <Select.Option value="bkash">
                      <img src={bkashLogo} alt="BKash" className="payment-logo" /> BKash
                    </Select.Option>
                    <Select.Option value="nagad">
                      <img src={nagadLogo} alt="Nagad" className="payment-logo" /> Nagad
                    </Select.Option>
                  </Select>
                  <ErrorMessage name="donationMethod" component="div" className="error-message" />
                </Form.Item>

                <Form.Item label="Message (Optional)">
                  <Field as={Input.TextArea} name="donationMessage" placeholder="Message (Optional)" rows={4} />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                  Donate Now
                </Button>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donation;
