const { replacePath, trimByChar, isEmptyOrSpaces } = require('./utils')
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        let slug = ""
        let campaign = ""

        if (
            Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
            Object.prototype.hasOwnProperty.call(node.frontmatter, "campaign")
        ) {
            campaign = trimByChar(node.frontmatter.campaign.toLowerCase(), '/')
            createNodeField({
                node,
                name: `campaignSlug`,
                value: replacePath(`/campaign/${campaign}`),
            })
        } else {
            throw "expected a campaign!"
        }

        if (
            Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
            Object.prototype.hasOwnProperty.call(node.frontmatter, "url")
        ) {
            let url = trimByChar(node.frontmatter.url.toLowerCase(), '/')
            if (
                Object.prototype.hasOwnProperty.call(node.frontmatter, "rootPage")
            ) {
                slug = `/${trimByChar(node.frontmatter.rootPage.toLowerCase(), '/')}/${url}/`
            } else if (
                Object.prototype.hasOwnProperty.call(node.frontmatter, "type")
            ) {
                let pageType = trimByChar(node.frontmatter.type.toLowerCase().trim(), '/')
                slug = `/${pageType}/${url}/`
            } else {
                slug = `/${url}/`
            }
        }

        if (isEmptyOrSpaces(slug)) {
            slug = createFilePath({ node, getNode, basePath: `pages` })
        }
        createNodeField({
            node,
            name: `slug`,
            value: replacePath(slug),
        })
    }
}