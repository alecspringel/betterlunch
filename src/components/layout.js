import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import './index.css';

const defaultConfig = { displayFooter: true };

const Layout = ({ children, pageName, config = defaultConfig }) => {
  const { displayFooter } = config;
  return (
    <>
      <Navigation siteTitle="Better Lunch" pageName={pageName} />
      <main>{children}</main>
      {displayFooter && <Footer />}
    </>
  );
};

export default Layout;
