import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';

function CharacterList({ characters }) {
  return (
    <ul className="unordered-list"> {
      characters.map(function (x) {
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

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired,
  })).isRequired,
}

export default CharacterList
