import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Input, Dropdown, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';  // Import the logo image

import '../styles/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = React.useState(false);

  const handleLoginClick = () => navigate('/login');
  const handleRegisterClick = () => navigate('/register');
  const handleDonateClick = () => navigate('/donate');

  const donationsMenu = (
    <Menu>
      <Menu.Item key='1'>
        <Link to='/medical'>Medical</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/education'>Education</Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/disaster-relief'>Disaster Relief</Link>
      </Menu.Item>
    </Menu>
  );

  const aboutMenu = (
    <Menu>
      <Menu.Item key='1'>
        <Link to='/our-mission'>Our Mission</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/team'>Team</Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/impact'>Impact</Link>
      </Menu.Item>
    </Menu>
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar fixed-top shadow-sm p-2 ${scrolling ? 'scrolled' : ''}`}>
      <div className='container-fluid d-flex align-items-center justify-content-between'>
        <Input placeholder='Search...' style={{ width: 200 }} />

        <Dropdown overlay={donationsMenu} trigger={['hover']}>
          <Button type='link'>
            Donations <CaretDownOutlined />
          </Button>
        </Dropdown>

        <Dropdown overlay={aboutMenu} trigger={['hover']}>
          <Button type='link'>
            About <CaretDownOutlined />
          </Button>
        </Dropdown>

        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='Logo' style={{ height: '50px' }} />
          <div className='tagline'>FOR EVERY SOUL</div>
        </Link>

        <Button type='link' onClick={handleLoginClick}>Login</Button>
        <Button type='link' onClick={handleRegisterClick}>Register</Button>
        <Button type='primary' onClick={handleDonateClick}>Donate</Button>
      </div>
    </nav>
  );
};

export default NavBar;
