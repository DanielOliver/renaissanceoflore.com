import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { isEmptyOrSpaces } from "../../gatsby/utils"

const Header = ({ siteTitle, subTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.0rem 1.0875rem`,
      }}
    >
      <h1 className="readable-title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {!isEmptyOrSpaces(subTitle) &&
        <h1 className="readable-subtitle" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {subTitle}
          </Link>
        </h1>
      }
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
