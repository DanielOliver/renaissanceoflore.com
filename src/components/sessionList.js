import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';

function SessionList({ sessions }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  return (
    <ul> {
      sessions.map(function (x) {
        let parsedDate = new Date(x.frontmatter.date).toLocaleDateString(undefined, options)
        return (
          <li key={x.id}>
            <p className="readable-text">
              <Link to={x.fields.slug}>{x.frontmatter.title}</Link> - <i>Published {parsedDate}</i>
            </p>
          </li>
        )
      }
      )}
    </ul>
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
