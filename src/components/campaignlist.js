import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function CampaignList() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}, 
            limit: 1000, 
            filter: {frontmatter: {type: {eq: "campaign"}}}) {
          nodes {
            frontmatter {
              type
              date
              title
            }
            fields {
              slug
            }
            id
          }
        }
      }      
    `
  )

  return (
    <ul> {
      allMarkdownRemark.nodes.map(function (x) {
        return (
          <li key={x.id}>
            <p className="readable-header3">
              <Link to={x.fields.slug}>{x.frontmatter.title}</Link>
            </p>
          </li>
        )
      }
      )}
    </ul>
  )
}

export default CampaignList
