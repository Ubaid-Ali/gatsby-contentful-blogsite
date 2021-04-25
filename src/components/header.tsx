import * as React from "react"
import { Link } from "gatsby"


const Header: React.FC = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <ul style={{ padding: "1rem", listStyle: "none", margin: "0", display: "flex", fontFamily: "sans-serif", fontWeight: "bold" }}>

        <li style={{ margin: 0, padding: "0 0.5rem" }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >Home
          </Link>
        </li>
        <li style={{ margin: 0, padding: "0 0.5rem" }}>
          <Link
            to="/blog/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >Blogs
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header