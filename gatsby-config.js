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
    title: `St. Herman's Cave Tubing & Inland Blue Hole`,
    description: `Enjoy St. Herman’s Cave tubing in Belize—one of only two cave tubing locations, perfectly located on the Hummingbird Highway and away from cruise ship crowds`,
    author: `@Jose Urbina`,
    siteUrl: `https://sthermanscavebelize.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
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
        endpoint: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cls1doxdy2pb601utnz0vg1e2/master",
       token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDY3NjMzOTEsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsczFkb3hkeTJwYjYwMXV0bnowdmcxZTIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtdXMtZWFzdC0xLXNoYXJlZC11c2VhMS0wMi5oeWdyYXBoLmNvbS8iLCJzdWIiOiI4MDgwODcxMi0xNGE0LTQ2YTctOTIxNS1lN2UzZTU0ZWIwMzciLCJqdGkiOiJjbHMycXV0bXUwZHA1MDFrNDhubWoyZmhoIn0.jmhPMGB3DzWY4bgegtil1IIdIgDR-Gxio5cIvCZnTc2n0mqjSJClUU0EPilW4lwSEEk3IyZOWgEolu6KhebHMH5_B8KKY3Pv-r8he3_tAcjGUTDXLWCsXuQM9LRFiENhbKKsBmXDd4VwvDUW84zqjiKmJ9q5cnPfo8drf5WbbjxY_CcsAQiIjmch-Nkym4BYwXRmaaVPFPGdhaYkq8SGi886FbIAvqA4vfB-UfRUATvL464qZDYeSPfGYE3-SF9xFFKVlNcIHuH5Og98epBS7yQukoTkHdByrkWoCIrZmgxyhyjPobChxpXlnmLb_QaXCQN0Z7KZTWZqs2FNVmsT1KbB-y2su2o6mjZwzF4Bmy0cP2RwxhvZVP9zdCFjHqT2XH8crTVpfdFnUpd1vSaE7qzeU5Z4Pc_LbCX4N3tDaVMlnf8_6YtVAxqjDAs9gvvwT7zvunBm5OqEasKsWRs4AkG33LcWzMuGixr_2s_hVY1FiWSodxAsZpKXJXqMe2ezbRbjORyHJWMwqpvWDgy7yFtDCLtz6q9Ivlz5gtMjcUyElE0aoKAMKfMzqGTKNCpwK667NA8Tpa_FuPj5JmPwuRlprJxptbBqQztPfObRzaymRJ08jRQf1k6LXEAXL8bigGJzqLwFbuVMGVWeDLt6mKhH27Zoylq3DZv3zvfVo8g",
   
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
        icon: `src/images/hermans3.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
                