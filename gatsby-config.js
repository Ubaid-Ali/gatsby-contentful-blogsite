// const dotenv = require('dotenv');

// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config({path: `.env.${process.env.NODE_ENV}`},);
// }

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Blog Site`,
    description: `This is very imformative blogsite about Mobile and Laptop.`,
    author: `@ubaid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          authDomain: "gatsby-blog-1.firebaseapp.com",
          apiKey: "AIzaSyBvnXJGFVKHyq0VFxSpP94oCaFs1BX2ET8",
          projectId: "gatsby-blog-1",
          storageBucket: "gatsby-blog-1.appspot.com",
          messagingSenderId: "283879494225",
          appId: "1:283879494225:web:79404b6eb09102386dde70",
        },
        features: {
          auth: true,
          database: true,
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
          performance: false,
          analytics: false,
        },
      },
    },
  ],
}
