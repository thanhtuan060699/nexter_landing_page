/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Instant call',
    title: 'Instant call',
    text:
      'Just need a smartphone, you can start speaking English instantly.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Matching',
    title: 'Matching',
    text:
      'Make friends from all over the world.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Audio chat',
    title: 'Audio chat',
    text:
      'Get bored of texting? Chat by audio instead, this will help your speaking improved even faster.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Click to translate',
    title: 'Click to translate',
    text:
      "See a word you don't understand? Just click, it'll be automatically translated",
  },
  {
    id:5,
    imgSrc: Support,
    altText: 'Built-in dictionary',
    title: 'Built-in dictionary',
    text:
      'Dictionary always available on any screens',
  },
  {
    id:6,
    imgSrc: Support,
    altText: 'Wordlist',
    title: 'Wordlist',
    text:
      'Build your own wordlist and learn from that.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant : 'section.keyFeature' }} id="feature">
    <Container>
      <SectionHeader
        slogan="FEATURES"
        title="Learn English in a Fun Way with Real People."
      />
      
      <Grid sx={styles.grid}>
        {
          data.map((item)=>(
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))
        }
      </Grid> 
    </Container>
  </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
