/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Cave Kayaking Belize`,
    description: `Cave kayaking in Belize at the Nohoch Che'en Caves Branch Archaeological reserve, Belize's #1 Cave Kayaking Destination.`,
    author: `@Jose Urbina`,
    siteUrl: `https://cavekayakingbelize.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
       {                             
      resolve: `gatsby-plugin-google-gtag`,
      options: {
          trackingIds: ['G-J2EEWB8BG0'],
          pluginConfig: {
            head: true
          },
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
        {
    resolve: 'gatsby-v5-source-hygraph',
     options: {
        endpoint: "https://api-us-west-2.hygraph.com/v2/cmmsd7a3912ki07loceuv3308/master",
       token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NzM2MTYxMjYsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21tc2Q3YTM5MTJraTA3bG9jZXV2MzMwOC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiN2NkYmNmYTEtMGI0My00ZTQ1LThjZDEtZGVhNjIyMjNkZWE1IiwianRpIjoiY21laTZlM2ZoMWlkdTA3bXgwbzkxMGR4OSJ9.JNBOKroNN4r7t_VzYBGlJhDmc4ujfIBPYdKgeoaKD7OzE_ryCTiaxQ6HndS8yg3YrcKYVbTp1MS0-MRO-ZFleMLas8ivmXJT2dpIhhRCFobE03-F6GFd7-K1Sef6yQ5CyxbVni5BgrFPr_HCumYDmLSoxcJeGtxIyr-EKHmWSsw5IAPWvTdo5VF_4mw0nxXpe57MOKCidWToEdQAGtMaHBNFB8LoDr4xxNOJ0ZiTuVvJ5FJMH9F1rKgblbY1ECTSssw2q-fiWmjCoyJkvoTsUfu5r77jTBWGABsi_zLQR9use74WPtNZTTdbQ6chjoArqoWyIpwGGI5SKi7TqH3zlcpiuEiocG1r-aa3fT_oSjWKr3-LWfmvlI6_X55tpDTcbDk9vaNrhmgvYi-R5DAFFlJmvmzRIvxiIKpUGmlT2vkbW2N_XBHRU8883gC3l6VmZ7qPnNytrr5cNRoHdYCeTxhEhGSjL1uTULoJTN-9wT_cZIY6m8aic0Yyy_CJH3_H7pNJmL0tHcSK5T30C04rZEAbWUM3nCnJQFegS9en51OvFWwfa1tc9Aqabzy78JlQua25NRBeZkEHj7Tx3J96vbiBl4KddeG12VQCO47m4LFiEk9Bx6g78uI5dP2Uf60fBLtQ9OJMQGUjDlN8ui9KKs6O4qzhkUbn4Ui1rP5Aol8",
   
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bck_logo_new.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
                