
const path = require("path")

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              sessionIntroducedSlug
              sessionRetiredSlug
            }
            frontmatter {
              type
              campaign
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

      const pageTemplate = path.resolve(`src/templates/${node.frontmatter.type}Template.js`)

      createPage({
        path: node.fields.slug,
        component: pageTemplate,
        context: {
          campaign: node.frontmatter.campaign,
          sessionIntroducedSlug: node.fields.sessionIntroducedSlug,
          sessionRetiredSlug: node.fields.sessionRetiredSlug,
        }, // additional data can be passed via context
      })
    })
  })
}