import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function SessionList({ campaign }) {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
    query {
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}, 
            limit: 1000, 
            filter: {frontmatter: {type: {eq: "session"}}}) {
          nodes {
            frontmatter {
              type
              date
              title
              campaign
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
            allMarkdownRemark.nodes.filter((x) => x.frontmatter.campaign === campaign).map(function (x) {
                return (
                    <li key={x.id}>
                        <p className="readable-text">
                            <Link to={x.fields.slug}>{x.frontmatter.title}</Link>
                        </p>
                    </li>
                )
            }
            )}
        </ul>
    )
}

export default SessionList
