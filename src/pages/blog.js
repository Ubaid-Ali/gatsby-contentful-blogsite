import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishDate(formatString: "DD MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 500) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                excerpt
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Blog" />
      <p>
        <Link to="/">Go back to the Homepage</Link>
      </p>
      <ul className="posts">
        {/* map */}
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishDate}</span>
              </div>
              {edge.node.featuredImage && (
                <Img
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.featuredImage.title}
                />
              )}

              <p className="excerpt">{edge.node.excerpt.excerpt}</p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog
