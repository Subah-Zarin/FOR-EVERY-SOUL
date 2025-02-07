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

  const [donationsOpen, setDonationsOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);

  const handleDropdownVisibility = (dropdown) => {
    switch (dropdown) {
      case 'donations':
        setDonationsOpen(!donationsOpen);
        break;
      case 'about':
        setAboutOpen(!aboutOpen);
        break;
      case 'help':
        setHelpOpen(!helpOpen);
        break;
      default:
        break;
    }
  };

  const donationsMenu = (
    <Menu
      theme="dark"
      style={{
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        backgroundColor: '#fff',
      }}
    >
      <Menu.Item key="1" style={menuItemStyle}>
        <Link to="/medical" style={menuLinkStyle}>
          Medical
        </Link>
      </Menu.Item>
      <Menu.Item key="2" style={menuItemStyle}>
        <Link to="/education" style={menuLinkStyle}>
          Education
        </Link>
      </Menu.Item>
      <Menu.Item key="3" style={menuItemStyle}>
        <Link to="/disaster-relief" style={menuLinkStyle}>
          Disaster Relief
        </Link>
      </Menu.Item>
    </Menu>
  );

  const aboutMenu = (
    <Menu
      theme="dark"
      style={{
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        backgroundColor: '#fff',
      }}
    >
      <Menu.Item key="1" style={menuItemStyle}>
        <Link to="/our-mission" style={menuLinkStyle}>
          Our Mission
        </Link>
      </Menu.Item>
      <Menu.Item key="2" style={menuItemStyle}>
        <Link to="/team" style={menuLinkStyle}>
          Team
        </Link>
      </Menu.Item>
      <Menu.Item key="3" style={menuItemStyle}>
        <Link to="/impact" style={menuLinkStyle}>
          Impact
        </Link>
      </Menu.Item>
    </Menu>
  );

  const helpMenu = (
    <Menu
      theme="dark"
      style={{
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        backgroundColor: '#fff',
      }}
    >
      <Menu.Item key="1" style={menuItemStyle}>
        <Link to="/donate" style={menuLinkStyle}>
          Donate
        </Link>
      </Menu.Item>
      <Menu.Item key="2" style={menuItemStyle}>
        <Link to="/volunteer" style={menuLinkStyle}>
          Join as a Volunteer
        </Link>
      </Menu.Item>
      <Menu.Item key="3" style={menuItemStyle}>
        <Link to="/fundraise" style={menuLinkStyle}>
          Fundraise
        </Link>
      </Menu.Item>
      <Menu.Item key="4" style={menuItemStyle}>
        <Link to="/share" style={menuLinkStyle}>
          Share with Friends
        </Link>
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
        <Input placeholder='Search...' style={{ width: 200, borderRadius: '50px', padding: '8px 16px' }} />

        <Dropdown
          overlay={donationsMenu}
          trigger={['hover']}
          onVisibleChange={() => handleDropdownVisibility('donations')}
        >
          <Button
            type='link'
            className="dropdown-button"
          >
            Donations <CaretDownOutlined className={donationsOpen ? 'rotate-up' : ''} />
          </Button>
        </Dropdown>

        <Dropdown
          overlay={aboutMenu}
          trigger={['hover']}
          onVisibleChange={() => handleDropdownVisibility('about')}
        >
          <Button
            type='link'
            className="dropdown-button"
          >
            About <CaretDownOutlined className={aboutOpen ? 'rotate-up' : ''} />
          </Button>
        </Dropdown>

        <Dropdown
          overlay={helpMenu}
          trigger={['hover']}
          onVisibleChange={() => handleDropdownVisibility('help')}
        >
          <Button
            type='link'
            className="dropdown-button"
          >
            How to Help <CaretDownOutlined className={helpOpen ? 'rotate-up' : ''} />
          </Button>
        </Dropdown>

        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='Logo' style={{ height: '50px', marginRight: '10px' }} />
          <div className='tagline'>FOR EVERY SOUL</div>
        </Link>

        <Button type='link' onClick={handleLoginClick}>Login</Button>
        <Button type='link' onClick={handleRegisterClick}>Register</Button>
        <Button type='primary' onClick={handleDonateClick}>Donate</Button>
      </div>
    </nav>
  );
};

const menuItemStyle = {
  borderRadius: '8px',
  marginBottom: '8px',
  transition: 'background-color 0.3s ease',
};

const menuLinkStyle = {
  color: '#1890ff',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

export default NavBar;
