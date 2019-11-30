import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark, campaignPage } = data // data.markdownRemark holds our post data
    const { frontmatter, html, fields } = markdownRemark

    return (
        <Layout subTitle={`Session: ${frontmatter.title}`}>
            <Seo title={frontmatter.title}></Seo>
            <div>
                <div>
                    <h1 className="readable-header1">
                        From Campaign <Link to={fields.campaignSlug}>: {campaignPage.frontmatter.title}</Link>
                    </h1>
                </div>
                <br />
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </Layout>
    )
}


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
        date(formatString: "MMMM DD, YYYY")
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