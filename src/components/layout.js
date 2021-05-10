import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import './index.css';

const Layout = ({ children }) => (
  <>
    <Navigation siteTitle="BetterLunch" />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
