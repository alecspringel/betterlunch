import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const fontStyles = `
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: local(""),
    url("./fonts/montserrat-v14-latin-regular.woff2") format("woff2"),
    url("./fonts/montserrat-v14-latin-regular.woff") format("woff");
  font-display: block;
}
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  src: local(""),
    url("./fonts/montserrat-v14-latin-600.woff2") format("woff2"),
    url("./fonts/montserrat-v14-latin-600.woff") format("woff");
  font-display: block;
}
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  src: local(""),
    url("./fonts/lato-v17-latin-regular.woff2") format("woff2"),
    url("./fonts/lato-v17-latin-regular.woff") format("woff");
  font-display: block;
}
`;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;

const SEO = ({
  title, description, image,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <style>{fontStyles}</style>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      <meta property="og:type" content="website" />

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};
