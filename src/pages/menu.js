import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ScreenSizeProvider } from '../components/contexts/ScreenSize';
import Head from '../components/menu/Head';
import MenuList from '../components/menu/MenuList';
// import MENU_DATA from '../data/menu';

const Menu = ({ data }) => {
  const [filter, setFilter] = useState({ value: null, label: 'All' });

  return (
    <ScreenSizeProvider>
      <Layout pageName="menu" config={{ displayFooter: false }}>
        <SEO title="Our Menu" description="Take a look at all of our food options." />
        <div className="content">
          <Head setFilter={setFilter} filter={filter} />
          <MenuList data={data} filter={filter} />
        </div>
      </Layout>
    </ScreenSizeProvider>
  );
};

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
