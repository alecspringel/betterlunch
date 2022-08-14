module.exports = {
  siteMetadata: {
    title: `Better Lunch`,
    description: `Better Lunch serves hot lunch to children in schools throughout Las Vegas, Summerlin, and Henderson Nevada`,
    author: `@alecspringel`,
    url: `https://mybetterlunch.com`,
    image: `/images/seo.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menu`,
        path: `${__dirname}/src/menuPhotos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Better Lunch`,
        short_name: `Better Lunch`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/orange-whole.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Montserrat", "Lato"],
          urls: ["fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "betterlunch",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-9HZ4RJ0GE9", // Google Analytics
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT-5S8CZKT",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oy1pzls9u3uc`,
        accessToken: `rkVPiQpEMWRWcPK2o3stpKf_N25Sx5rF81T4W-xSE0E`,
      },
    },
  ],
}
