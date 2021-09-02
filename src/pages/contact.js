import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Head from '../components/contact/Head';
import Navigation from '../components/navigation';
import { ScreenSizeProvider } from '../components/contexts/ScreenSize';

// Not including the layout component here, because the footer is required to determine
// the styling for the page. The footer component can be found in <Head />

const contact = () => (
  <ScreenSizeProvider>
    <Navigation siteTitle="BetterLunch" />
    <main>
      <SEO title="Contact Us" />
      <div className="content">
        <Head />
      </div>
    </main>
  </ScreenSizeProvider>
);

export default contact;
