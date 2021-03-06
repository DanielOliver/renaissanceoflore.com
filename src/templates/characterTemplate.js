import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { formatAsLongDate } from "../../gatsby/utils"

function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, campaignPage, sessionPage, retiredSessionPage } = data // data.markdownRemark holds our post data
  const { frontmatter, html, fields } = markdownRemark

  return (
    <Layout subTitle={`Character: ${frontmatter.title}`}>
      <Seo title={frontmatter.title}></Seo>
      <div className="max-w-5xl">
        <h1 className="readable-header1">
          From the Campaign <Link to={fields.campaignSlug}>: {campaignPage.frontmatter.title}</Link>
        </h1>
        <br />
        <p className="readable-text">
          Introduced in <Link to={sessionPage.fields.slug}>: {sessionPage.frontmatter.title}</Link> - <i>Published {formatAsLongDate(sessionPage.frontmatter.date)}</i>
        </p>
        {retiredSessionPage && retiredSessionPage.fields && retiredSessionPage.fields.slug &&
          <>
            <p className="readable-text">
              Retired in <Link to={retiredSessionPage.fields.slug}>: {retiredSessionPage.frontmatter.title}</Link> - <i>Published {formatAsLongDate(retiredSessionPage.frontmatter.date)}</i>
            </p>
          </>

        }
        <br />
        <p className="readable-header3">
            Name - {frontmatter.name}
            <br />
            Type - {frontmatter.characterType}
        </p>
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
  query($path: String!, $campaign: String!, $sessionIntroducedSlug: String!, $sessionRetiredSlug: String) {
    markdownRemark(fields: { slug: { eq: $path} }) {
      fields {
        slug
        campaignSlug
      }
      id
      html
      frontmatter {
        title
        characterType
        name
      }
    }
    campaignPage: markdownRemark(frontmatter: { campaign: { eq: $campaign}, type: { eq: "campaign" }}) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        title
      }
    }
    sessionPage: markdownRemark(fields: { slug: { eq: $sessionIntroducedSlug}}, frontmatter: {type: { eq: "session" }}) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        date
        title
      }
    }
    retiredSessionPage: markdownRemark(fields: { slug: { eq: $sessionRetiredSlug}}, frontmatter: {type: { eq: "session" }}) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        date
        title
      }
    }

  }
`