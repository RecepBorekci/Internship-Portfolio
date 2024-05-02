import React from 'react';
import { Box } from '@mui/material';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';

const StyledNavbar = styled(Navbar)({
  backgroundColor: '#0A4D68',
  marginTop: '4rem',
  marginLeft: '4rem',
  color: '#A5D7E8',
});

const StyledNavLink = styled(Nav.Link)({
  fontWeight: 'bold',
  margin: '0 2rem',
  color: '#A5D7E8 !important',
  '&:hover': {
    color: '#C8ECF8 !important',
    cursor: 'pointer',
  },
  textDecoration: 'none',
});

const navigationLinks = [
  {
    label: 'Home',
    fontSize: {
      smallScreen: '1rem',
      mediumScreen: '1.5rem',
      largeScreen: '2rem',
      xlargeScreen: '2.5rem',
    },
  },
  {
    label: 'About',
    fontSize: {
      smallScreen: '1rem',
      mediumScreen: '1.5rem',
      largeScreen: '2rem',
      xlargeScreen: '2.5rem',
    },
  },
  {
    label: 'Skills',
    fontSize: {
      smallScreen: '1rem',
      mediumScreen: '1.5rem',
      largeScreen: '2rem',
      xlargeScreen: '2.5rem',
    },
  },
  {
    label: 'Experience',
    fontSize: {
      smallScreen: '1rem',
      mediumScreen: '1.5rem',
      largeScreen: '2rem',
      xlargeScreen: '2.5rem',
    },
  },
  {
    label: 'Work',
    fontSize: {
      mediumScreen: '1.5rem',
      largeScreen: '2rem',
      xlargeScreen: '2.5rem',
    },
  },
  {
    label: 'Contact',
    fontSize: {
      mediumScreen: '1.5rem',
      largeScreen: '2rem',
      xlargeScreen: '2.5rem',
    },
  },
];

function MyNavbar() {
  const isSmallScreen = useMediaQuery({ maxWidth: 576 });
  const isMediumScreen = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 992 });
  const isXLargeScreen = useMediaQuery({ minWidth: 993 });

  const getFontSize = (link) => {
    if (isSmallScreen) return link.fontSize.smallScreen;
    if (isMediumScreen) return link.fontSize.mediumScreen;
    if (isLargeScreen) return link.fontSize.largeScreen;
    if (isXLargeScreen) return link.fontSize.xlargeScreen;
  };

  return (
    <StyledNavbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navigationLinks.map((link, index) => (
              <StyledNavLink
                key={index}
                as={Link}
                to={link.label.toLowerCase()}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ fontSize: getFontSize(link) }}
              >
                {link.label}
              </StyledNavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default MyNavbar;
