/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import FeatureThumb from 'assets/app-ss1.png';



export default function Overview() {
  return (
   <section sx={{variant: 'section.coreFeature'}} className="section-core" id="overview">
    <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
        <h2 className="title-core">
          Thousands of people are using our app everyday
        </h2>
        <p>
        Learning English is hard, we know that. But it will be a lot easier if you have friends to learn with. With Nexter, we can help you find friends to chat with and speak English with just one click
        </p>
        <a href="http://onelink.to/s25dt2" style={{textDecoration:"none"}}>
          Get Started
        </a>
      </Box>
      <Box sx={styles.thumbnail}>
        <Image src={FeatureThumb} alt="Thumbnail" />
        <Box sx={styles.shapeBox}>
        </Box>
      </Box>
    </Container>
   </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
