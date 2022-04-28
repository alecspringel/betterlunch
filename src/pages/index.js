import React, { Component } from 'react';
import Head from '../components/home/Head';
import Blurb from '../components/home/Blurb';
import Layout from '../components/layout';
import SEO from '../components/seo';
import OurStory from '../components/home/OurStory';
import OurMenu from '../components/home/OurMenu';
import SignUp from '../components/home/SignUp';
import { ScreenSizeProvider } from '../components/contexts/ScreenSize';

class Home extends Component {
  render() {
    return (
      <ScreenSizeProvider>
        <Layout>
          <SEO title="Home" description="Better Lunch serves hot lunch to children in schools throughout Las Vegas, Summerlin, and Henderson Nevada." />
          <div className="content">
            <Head />
            <Blurb />
            <OurStory />
            <OurMenu />
            <SignUp />
          </div>
        </Layout>
      </ScreenSizeProvider>
    );
  }
}

export default Home;
