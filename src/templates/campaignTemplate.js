import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout subTitle={`Campaign: ${frontmatter.title}`}>
      <Seo title={frontmatter.title}></Seo>
      <div>
        {/* {frontmatter.showTitle && <h1 align="center">{frontmatter.title}</h1>} */}
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
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path} }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        sidebar
        showTitle
        hideAnchor
      }
    }
  }
`