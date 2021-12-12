/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import FeatureThumb from 'assets/app-ss2.png';



export default function Overview() {
  return (
   <section sx={{variant: 'section.coreFeature'}} className="section-core" id="overview">
    <Container sx={styles.containerBox}>
      <Box sx={styles.thumbnail}>
        <Image src={FeatureThumb} alt="Thumbnail" />
        <Box sx={styles.shapeBox}>
        </Box>
      </Box>
      <Box sx={styles.contentBox}>
        <h2 className="title-core">
        Fun and Interactive
        </h2>
        <p>
        It's boring to learn pronunciation, vocabs with a robot, isn't it? Now with Nexter, it will be a lot more fun and interactive, cuz you will learn and have fun with real people.
        </p>
        <a>
          Get Started
        </a>
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
