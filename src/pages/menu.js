import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ScreenSizeProvider } from '../components/contexts/ScreenSize';
import Head from '../components/menu/Head';

class Menu extends Component {
  render() {
    return (
      <ScreenSizeProvider>
        <Layout>
          <SEO title="Menu" />
          <div className="content">
            <Head />
          </div>
        </Layout>
      </ScreenSizeProvider>
    );
  }
}

export default Menu;
