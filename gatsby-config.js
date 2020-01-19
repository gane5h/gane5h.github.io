module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:

  siteMetadata: {
    siteTitle: `Ganesh Swami`,
    siteHeadline: `Head`,
    siteTitleAlt: `Ganesh Swami`,
    author: `@gane5h`,
    siteDescription: `Notes on Entrepreneurship, Adventure and Speaking.`,
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gane5h`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/ganswami/`
      }
    ],
  },
}
