/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

interface layoutProps {
  children: React.ReactNode
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ display: "flex", flexFlow: "column", fontFamily: "sans-serif" , }}>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Welcome to this Blog`}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            fontFamily:"fantasy",
            fontSize:"16px",
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Created by Ubaid Ali
        </footer>
      </div>
    </div>
  )
}

export default Layout
