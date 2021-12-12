/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import Phone from 'assets/phone.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple, faGooglePlay} from '@fortawesome/free-brands-svg-icons'

export default function Banner() {
  return (
    <section id="home" sx={styles.sectionBanner}>
      <Container sx={styles.banner.container} className="banner-section">
        <div sx={styles.banner.bannerContent}>
          <h1>The Social Network For English Learners.</h1>
          <p>Find friends to speak and chat in English anytime, anywhere</p>
          <div>
          <Button style={{marginRight : "10px"}}>
            <FontAwesomeIcon icon={faApple}/> App Store
          </Button>
          <Button>
            <FontAwesomeIcon icon={faGooglePlay}/> Google Play
          </Button>
          </div>
          
        </div>
        <div sx={styles.banner.bannerImage} style={{textAlign: "end",width: "50%"}} className="image-banner">
          <img  src={Phone} style={{width: '90%'}}/>
        </div>
      </Container>
    </section>
  );
}

const styles = {
  sectionBanner: {
    backgroundColor: '#ff6b81',
  },
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
    bannerContent: {
      pt : '180px'
    },
    bannerImage: {
      pt : '80px',
      img: {
        width: '80%',
      },
    }
  },
};
