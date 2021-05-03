import React from 'react';
import { ScreenSizeProvider } from '../components/contexts/ScreenSize';
import Head from '../components/faq/Head';
import Questions from '../components/faq/Questions';
import Layout from '../components/layout';
import SEO from '../components/seo';

const faq = () => (
  <ScreenSizeProvider>
    <Layout>
      <SEO title="FAQ" />
      <div className="content">
        <Head />
        <Questions />
      </div>
    </Layout>
  </ScreenSizeProvider>
);

export default faq;
