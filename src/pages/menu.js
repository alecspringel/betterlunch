import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ScreenSizeProvider } from '../components/contexts/ScreenSize';
import Head from '../components/menu/Head';
import MenuList from '../components/menu/MenuList';

const Menu = ({ data }) => (
  <ScreenSizeProvider>
    <Layout pageName="menu">
      <SEO title="Our Menu" description="Take a look at all of our food options." />
      <div className="content">
        <Head />
        <MenuList data={data} />
      </div>
    </Layout>
  </ScreenSizeProvider>
);

export default Menu;

export const pageQuery = graphql`
  query {
    images: allFile(filter: { sourceInstanceName: { eq: "menu" } }) {
      edges {
        node {
          name
          base
          childImageSharp {
            gatsbyImageData(
              width: 250,
              height: 170,
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
