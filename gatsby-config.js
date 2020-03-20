module.exports = {
  siteMetadata: {
    title: `Mission Calvary Church`,
    description: `Mission Calvary Church is a portuguese pentecostal church located in Edgartown on Martha's Vineyard.`,
    author: `@jordanjordanb1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Mission Calvary Church`,
        short_name: `MCC`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      },
    },
    `gatsby-plugin-sass`,
  ],
}
