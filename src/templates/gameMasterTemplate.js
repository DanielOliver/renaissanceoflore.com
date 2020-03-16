import { graphql } from "gatsby"
import Template from "./genericTemplate"

export default Template

export const pageQuery = graphql`
  query($path: String!, $campaign: String!) {
    markdownRemark(fields: { slug: { eq: $path} }) {
      fields {
        slug
        campaignSlug
      }
      id
      html
      frontmatter {
        date
        title
      }
    }
    campaignPage: markdownRemark(frontmatter: { campaign: { eq: $campaign}, type: { eq: "campaign" }}) {
      fields {
        slug
        campaignSlug
      }
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`