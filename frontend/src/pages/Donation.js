import React, { useEffect } from 'react';
import { Button, Input, Form, message, Typography, Popover, Steps, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/donation.css';
import NavBar from '../components/NavBar';

// Import logos from the assets folder
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector('.donation-page').classList.add('scrolled');
      } else {
        document.querySelector('.donation-page').classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const validationSchema = Yup.object({
    donorName: Yup.string().required('Please enter your name!'),
    donorEmail: Yup.string().email('Invalid email format').required('Please enter your email!'),
    donorAddress: Yup.string().required('Please enter your address!'),
    donationAmount: Yup.number().required('Please enter the donation amount!').positive('Amount must be positive'),
    donationMethod: Yup.string().required('Please select a donation method!'),
    donationMessage: Yup.string().optional(),
  });

  const handleSubmit = (values) => {
    message.success('Thank you for your donation! Your contribution will make a difference.');
    navigate('/');
  };

  return (
    <div className="donation-page">
      <NavBar />
      <div className="donation-form-container">
        <div className="donation-form">
          <Title level={1}>Make a Donation</Title>

          <Steps current={1} progressDot={customDot} items={[
            { title: 'Fillup Personal Info' },
            { title: 'Enter Amount' },
            { title: 'Select Payment Method' },
            { title: 'Done' },
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
              <FormikForm>
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
                  <Field as={Input.TextArea} name="donationMessage" placeholder="Message (Optional)" rows={4} />
                </Form.Item>

                <Button type="primary" htmlType="submit" className="donation-submit-btn">
                  Donate Now
                </Button>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Donation;
