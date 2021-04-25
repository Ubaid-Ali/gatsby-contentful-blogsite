import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import Seo from "../components/seo"

import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      excerpt {
        excerpt
      }
      publishDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
        references {
          contentful_id
          title
          fluid(maxWidth: 300) {
            src
          }
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  // DeStructure
  const {
    publishDate,
    title,
    excerpt,
    featuredImage,
    body,
  } = data?.contentfulBlogPost

  // Richtext Contentful
  const assets = new Map(body.references.map(ref => [ref.contentful_id, ref]))
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const url = assets.get(node.data.target.sys.id).fluid?.src
        const alt = assets.get(node.data.target.sys.id).title
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Seo title={title} />
      <Link to="/blog/">Go back</Link>
      <div className="content">
        <h1>{title}</h1>
        <span className="meta"> Posted on {publishDate} </span>
        <p>{excerpt.excerpt}</p>

        {featuredImage && (
          <Img
            className="featured"
            fluid={featuredImage.fluid}
            alt={featuredImage.title}
          />
        )}
        {documentToReactComponents(JSON.parse(body.raw), options)}

        <p>The article was published in {publishDate}</p>
      </div>
    </Layout>
  )
}

export default BlogPost
