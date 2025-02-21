import React from 'react';
import { useNavigate, Link , useLocation} from 'react-router-dom';
import { Button, Input, Dropdown, Menu, Drawer } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';

import '../styles/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = React.useState(false);
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  // Determine if the viewport is mobile-sized
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  // Dropdown open states (used in desktop view)
  const [donationsOpen, setDonationsOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);

  const handleLoginClick = () => navigate('/login');
  const handleRegisterClick = () => navigate('/register');
  const handleBackClick = () => navigate(-1);

  const location = useLocation();

  const handleDonateClick = () => {
    navigate('/donation'); // Navigate to the donation page
  };
  

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

  // Menus for dropdowns (same for desktop and mobile)
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

  // Listen for scroll and window resize events
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Only show navbar if it's not mobile or (if mobile) the Drawer is not open.
  const showNavbar = !isMobile || (isMobile && !drawerVisible);

  return (
    <>
      {showNavbar && (
        <nav className={`navbar fixed-top shadow-sm p-2 ${scrolling ? 'scrolled' : ''}`}>
          {isMobile ? (
            // Mobile header: display brand and hamburger toggle
            <div className="container-fluid d-flex align-items-center justify-content-between">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
                <div className="tagline">FOR EVERY SOUL</div>
              </Link>
              <Button className="menu-toggle" onClick={() => setDrawerVisible(true)}>
                &#9776;
              </Button>
            </div>
          ) : (
            // Desktop header: full navigation bar with search, dropdowns, brand, and buttons
            <div className="container-fluid d-flex align-items-center justify-content-between">
              <Input
                placeholder="Search..."
                style={{ width: 200, borderRadius: '50px', padding: '8px 16px' }}
              />

              <Dropdown
                overlay={donationsMenu}
                trigger={['hover']}
                onVisibleChange={() => handleDropdownVisibility('donations')}
              >
                <Button type="link" className="dropdown-button custom-nav-link">
                  Donations <CaretDownOutlined className={donationsOpen ? 'rotate-up' : ''} />
                </Button>
              </Dropdown>

              <Dropdown
                overlay={aboutMenu}
                trigger={['hover']}
                onVisibleChange={() => handleDropdownVisibility('about')}
              >
                <Button type="link" className="dropdown-button custom-nav-link">
                  About <CaretDownOutlined className={aboutOpen ? 'rotate-up' : ''} />
                </Button>
              </Dropdown>

              <Dropdown
                overlay={helpMenu}
                trigger={['hover']}
                onVisibleChange={() => handleDropdownVisibility('help')}
              >
                <Button type="link" className="dropdown-button custom-nav-link">
                  How to Help <CaretDownOutlined className={helpOpen ? 'rotate-up' : ''} />
                </Button>
              </Dropdown>

        


              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
                <div className="tagline">FOR EVERY SOUL</div>
              </Link>

              <Button type="link" onClick={handleLoginClick} className="custom-nav-link">
                Login
              </Button>
              <Button type="link" onClick={handleRegisterClick} className="custom-nav-link">
                Register
              </Button>
              <Button type="primary" onClick={handleDonateClick}>
                Donate
              </Button>
            </div>
          )}
        </nav>
      )}

      {/* Offcanvas Drawer for Mobile Navigation */}
      {isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          <div style={{ padding: '1rem' }}>
            <Input
              placeholder="Search..."
              style={{
                width: '100%',
                marginBottom: '1rem',
                borderRadius: '50px',
                padding: '8px 16px',
              }}
            />
            <Dropdown overlay={donationsMenu} trigger={['click']}>
              <Button
                type="link"
                style={{ width: '100%', textAlign: 'left' }}
                className="custom-nav-link"
              >
                Donations <CaretDownOutlined />
              </Button>
            </Dropdown>
            <Dropdown overlay={aboutMenu} trigger={['click']}>
              <Button
                type="link"
                style={{ width: '100%', textAlign: 'left' }}
                className="custom-nav-link"
              >
                About <CaretDownOutlined />
              </Button>
            </Dropdown>
            <Dropdown overlay={helpMenu} trigger={['click']}>
              <Button
                type="link"
                style={{ width: '100%', textAlign: 'left' }}
                className="custom-nav-link"
              >
                How to Help <CaretDownOutlined />
              </Button>
            </Dropdown>
            <Button
              type="link"
              onClick={() => {
                setDrawerVisible(false);
                handleLoginClick();
              }}
              style={{ width: '100%', textAlign: 'left' }}
              className="custom-nav-link"
            >
              Login
            </Button>
            <Button
              type="link"
              onClick={() => {
                setDrawerVisible(false);
                handleRegisterClick();
              }}
              style={{ width: '100%', textAlign: 'left' }}
              className="custom-nav-link"
            >
              Register
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setDrawerVisible(false);
                handleDonateClick();
              }}
              style={{ width: '100%', textAlign: 'left' }}
            >
              Donate
            </Button>
          </div>
        </Drawer>
      )}
    </>
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