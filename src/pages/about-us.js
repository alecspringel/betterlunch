import React from 'react';
import Head from '../components/aboutUs/Head';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HowItWorks from '../components/aboutUs/HowItWorks';
import ByUs from '../components/aboutUs/ByUs';
import OurTeam from '../components/aboutUs/OurTeam';
import Features from '../components/aboutUs/Features';
import Menu from '../components/aboutUs/Menu';
import Footer from '../components/aboutUs/Footer';
import { ScreenSizeProvider } from '../components/contexts/ScreenSize';

const AboutUs = () => (
  <ScreenSizeProvider>
    <Layout>
      <SEO title="How it Works" description="Order online and we'll deliver directly to your child at lunch time." />
      <div className="content">
        <Head />
        <HowItWorks />
        <Features />
        <Menu />
        <ByUs />
        <OurTeam />
        <Footer />
      </div>
    </Layout>
  </ScreenSizeProvider>
);

export default AboutUs;
