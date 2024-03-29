import React from 'react';
import { ScreenSizeProvider } from '../components/contexts/ScreenSize';
import Head from '../components/faq/Head';
import Questions from '../components/faq/Questions';
import Layout from '../components/layout';
import SEO from '../components/seo';

const faq = () => (
  <ScreenSizeProvider>
    <Layout pageName="faq">
      <SEO title="FAQ" description="These are some of our most commonly asked questions." />
      <div className="content">
        <Head />
        <Questions />
      </div>
    </Layout>
  </ScreenSizeProvider>
);

export default faq;
