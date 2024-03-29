/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  const goToDownload=()=>{
    window.location.href = "http://onelink.to/s25dt2";
  }

  return (
    <header sx={styles.header} className={className}>
      <Container sx={styles.container}>
        <Logo src={LogoDark}/>
        <Flex as="nav" sx={styles.nav}>
          {
            menuItems.map((menuItems, i)=>(
              <Link
              sx={styles.headertitle}
              activeClass = "active"
              to= {menuItems.path}
              spy={true}
              smooth = {true}
              offset={-70}
              duration={500}
              key={i}
              >
              {menuItems.label}
              </Link>
            ))
          }
        </Flex>
        <MobileDrawer/>
        <Button className="download_btn" variant="secondary" aria-label="Get It Now" onClick={goToDownload}>
          Get It Now
        </Button>
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.download_btn': {
        bg: 'primary'
      },
    },
    '.download_btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      fontWeight : 'bolder',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
