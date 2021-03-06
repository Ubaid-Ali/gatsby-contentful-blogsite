import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi!</h1>
    <p>Welcome to my Gatsby site.</p>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`, flex: 1}}
    />
    <p className="button" >
      <Link to="/blog/">Visit the Blog Page</Link>
    </p>
  </Layout>
)

export default IndexPage
