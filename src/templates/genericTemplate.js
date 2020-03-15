import React from "react"
import { Link } from "gatsby"
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
      <div className="max-w-5xl">
        <h1 className="readable-header1">
          From the Campaign <Link to={fields.campaignSlug}>: {campaignPage.frontmatter.title}</Link>
        </h1>
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
