module.exports = {
  siteMetadata: {
    title: 'A11y Tips',
    author: 'Sara Vieira',
    description: 'A website full of of sweet a11y tips',
    siteUrl: 'https://a11ytips.rocks'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/tips`,
        name: 'tips'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          `gatsby-remark-copy-images`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-37411302-11'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `a11ytips.rocks`,
        short_name: `a11ytips`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#595959`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto:400,700`]
      }
    }
  ]
}
