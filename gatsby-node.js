/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type slug {
      slug: String!
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
  {
    allHygraphItemTours {
      edges {
        node {
          
           
            slug
           
          
          }
         
        }
      
    }
    allHygraphItemBlog {
      edges {
        node {
          
           
            slug
           
          
          }
         
        }
      
    }
    
  }

  `)

 const posts = data.allHygraphItemTours.edges

  posts.forEach(edge => {

    createPage({
      path: `/${edge.node.slug}`,
      component: require.resolve(`./src/templates/tourdetails.js`),
      context: {
        slug: edge.node.slug,
      }, 
      defer: edge.node.slug > 3,
    })





  })
  };
