import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import Feature from '../sections/feature';
import Overview from '../sections/overview';
import Statistic from 'components/statistic';
import Install from 'components/install';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="GoNexter" />
          <Banner />
          <KeyFeature />
          <Statistic />
          <Feature />
          <Overview />
          <Install />
        </Layout>
    </ThemeProvider>
  );
}
