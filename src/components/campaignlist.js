import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function CampaignList() {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
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
        <div> {
            allMarkdownRemark.nodes.map(function (x) {
                return (
                    <div key={x.id}>
                        <Link to={x.fields.slug} ><h1>{x.frontmatter.title}</h1></Link>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default CampaignList
