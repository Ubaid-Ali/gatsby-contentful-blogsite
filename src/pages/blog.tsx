import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"


const Blog = () => {

  interface edgeType {
    node: {
      excerpt: {
        excerpt: string
      },
      featuredImage: {
        title: string
        fluid: {
          aspectRatio: number
          base64: string
          sizes: string
          src: string
          srcSet: string
        }
      },
      id: string
      publishDate: string
      slug: string
      title: string
    }
  }

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
                title
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
      <p>
        <Link to="/">Go back</Link>
      </p>
      <ul className="posts">
        {/* map */}
        {data.allContentfulBlogPost.edges.map((edge: edgeType) => {


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
