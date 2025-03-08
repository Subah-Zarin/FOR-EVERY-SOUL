import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Input, Form, message, Typography, Select, Steps, Popover } from 'antd';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/donation.css';

// Import logos
import creditCardLogo from '../assets/credit-card.jpg';
import bankTransferLogo from '../assets/bank-transfer.png';
import bkashLogo from '../assets/bkash.jpeg';
import nagadLogo from '../assets/nagad.png';

const { Title } = Typography;

const customDot = (dot, { status, index }) => (
  <Popover content={<span>Step {index} status: {status}</span>}>{dot}</Popover>
);

const Donation = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    userId: Yup.string().required('User ID is required'),
    campaignId: Yup.string().required('Campaign ID is required'),
    donorName: Yup.string().required('Please enter your name!'),
    donorEmail: Yup.string().email('Invalid email format').required('Please enter your email!'),
    donorAddress: Yup.string().required('Please enter your address!'),
    amount: Yup.number().required('Please enter the donation amount!').positive('Amount must be positive'),
    donationMethod: Yup.string().required('Please select a donation method!'),
    message: Yup.string().optional(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('/api/donate', values);
      if (response.status === 201) {
        message.success('Thank you for your donation! Your contribution will make a difference.');
        resetForm();
      } else {
        message.error(`Unexpected response status: ${response.status}`);

      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Response error:', error.response.data);
        message.error(`Server error: ${error.response.data.message || 'Please try again.'}`);

      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
        message.error('No response from server. Please check your network connection.');
      } else {
        // Something else caused the error
        console.error('Error:', error.message);
        message.error(`Error: ${error.message}`);

      }
    }
  };
  

  return (
    <div className="donation-page">
      <NavBar />
      <div className="donation-form-container">
        <div className="donation-form">
          <Title level={1}>Make a Donation</Title>
          <Steps current={1} progressDot={customDot}>
            <Steps.Step title="Fill Personal Info" />
            <Steps.Step title="Enter Amount" />
            <Steps.Step title="Select Payment Method" />
            <Steps.Step title="Done" />
          </Steps>
          <Formik
            initialValues={{
              userId: '',
              campaignId: '',
              donorName: '',
              donorEmail: '',
              donorAddress: '',
              amount: '',
              donationMethod: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <FormikForm>
                <Form.Item label="User ID">
                  <Field as={Input} name="userId" placeholder="User ID" />
                  <ErrorMessage name="userId" component="div" className="error-message" />
                </Form.Item>
                <Form.Item label="Campaign ID">
                  <Field as={Input} name="campaignId" placeholder="Campaign ID" />
                  <ErrorMessage name="campaignId" component="div" className="error-message" />
                </Form.Item>
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
                  <Field as={Input} type="number" name="amount" placeholder="Enter Amount" />
                  <ErrorMessage name="amount" component="div" className="error-message" />
                </Form.Item>
                <Form.Item label="Donation Method">
                  <Select
                    value={values.donationMethod}
                    onChange={(value) => setFieldValue('donationMethod', value)}
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
                  <Field as={Input.TextArea} name="message" placeholder="Message (Optional)" rows={4} />
                </Form.Item>
                <Button type="primary" htmlType="submit" className="donation-submit-btn">
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