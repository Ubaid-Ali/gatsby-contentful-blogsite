require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Blog Site`,
    description: `This is very imformative blogsite about anything.`,
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
          apiKey: "AIzaSyDDtMf9eDFI5uQDcSF0-hRzAZ09QX_Bvqo",
          authDomain: "gatsby-blog-2.firebaseapp.com",
          projectId: "gatsby-blog-2",
          storageBucket: "gatsby-blog-2.appspot.com",
          messagingSenderId: "87359670018",
          appId: "1:87359670018:web:0e0d1040787b207750a41b"
        },
        features: {
          auth: true,
          database: true,
          firestore: true,
          storage: true,
          messaging: true,
          functions: true,
          performance: true,
          analytics: true,
        },
      },
    },
  ],
}
