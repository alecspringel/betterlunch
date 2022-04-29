import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import './index.css';

const Layout = ({ children, pageName }) => (
  <>
    <Navigation siteTitle="Better Lunch" pageName={pageName} />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
