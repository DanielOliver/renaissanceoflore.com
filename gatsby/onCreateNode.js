const { replacePath, trimByChar } = require('./utils')
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        let slug = ""
        if (
            Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
            Object.prototype.hasOwnProperty.call(node.frontmatter, "url")
        ) {
            if (
                Object.prototype.hasOwnProperty.call(node.frontmatter, "rootPage")
            ) {
                slug = `/${trimByChar(node.frontmatter.rootPage.toLowerCase(), '/')}/${trimByChar(node.frontmatter.url.toLowerCase(), '/')}/`
            } else {
                slug = `/${trimByChar(node.frontmatter.url.toLowerCase(), '/')}/`
            }
        } else {
            slug = createFilePath({ node, getNode, basePath: `pages` })
        }
        createNodeField({
            node,
            name: `slug`,
            value: replacePath(slug),
        })
    }
}