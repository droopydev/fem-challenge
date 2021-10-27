module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Droopy Attempts Frontend Mentor Challenge",
  },
  plugins: [
    `gatsby-plugin-netlify`, 
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `DM sans`
        ]
      }
    }
  ]
};
