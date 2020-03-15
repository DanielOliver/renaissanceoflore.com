import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';
import { formatAsLongDate } from "../../gatsby/utils"

function SessionList({ sessions }) {
  return (
    <ol reversed className="ordered-list"> {
      sessions.map(function (x) {
        let parsedDate = formatAsLongDate(x.frontmatter.date)
        return (
          <li key={x.id}>
            <p className="readable-text">
              <Link to={x.fields.slug}>{x.frontmatter.title}</Link> - <i>Published {parsedDate}</i>
            </p>
          </li>
        )
      }
      )}
    </ol>
  )
}

SessionList.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired,
  })).isRequired,
}


export default SessionList
