import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi!</h1>
    <p>Welcome to my Gatsby site.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`, flex: 1}}
    />
    <p className="button" >
      <Link to="/blog/">Visit the Blog Page</Link>
      {/* <Link to="/page-2/">Visit to the blog page.</Link> <br /> */}
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </p>
  </Layout>
)

export default IndexPage
