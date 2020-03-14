import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import CharacterList from "../components/characterList"
import SessionList from "../components/sessionList"
import NpcList from "../components/npcList"

function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, sessions, characters, npcs } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout subTitle={`Campaign: ${frontmatter.title}`}>
      <Seo title={frontmatter.title}></Seo>
      <div className="max-w-5xl">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <br />
        <p className="readable-header1">
          <Link to={`/map/${frontmatter.url}`}>Maps</Link>
        </p>

        <br />
        <h1 className="readable-header1">Sessions</h1>
        <SessionList sessions={sessions.nodes}></SessionList>

        <br />
        <h1 className="readable-header1">Characters</h1>
        <CharacterList characters={characters.nodes}></CharacterList>

        <br />
        <h1 className="readable-header1">NPCs</h1>
        <NpcList characters={npcs.nodes}></NpcList>

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
        campaign
        url
      }
    }
    characters: allMarkdownRemark(
          sort: {order: ASC, fields: [frontmatter___title]}, 
          limit: 1000, 
          filter: {frontmatter: {type: {eq: "character"}}, fields: {campaignSlug: {eq: $path}}}) {
        nodes {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          id
        }
    }
    npcs: allMarkdownRemark(
          sort: {order: ASC, fields: [frontmatter___title]}, 
          limit: 1000, 
          filter: {frontmatter: {type: {eq: "npc"}}, fields: {campaignSlug: {eq: $path}}}) {
        nodes {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          id
        }
    }
    sessions: allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}, 
        limit: 1000, 
        filter: {frontmatter: {type: {eq: "session"}}, fields: {campaignSlug: {eq: $path}}}) {
      nodes {
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
        id
      }
    }
  }
`