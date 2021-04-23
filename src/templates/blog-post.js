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
        fluid(maxWidth: 500) {
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
  
  // Richtext Contentful
  let { body } = data?.contentfulBlogPost
  const assets = new Map(body.references.map(ref => [ref.contentful_id, ref]))
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(`assets.get`, assets.get(node.data.target.sys.id).fluid?.src)
        const url = assets.get(node.data.target.sys.id).fluid?.src
        const alt = assets.get(node.data.target.sys.id).title
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Seo title={data.contentfulBlogPost.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{data.contentfulBlogPost.title}</h1>
        <span className="meta"> Posted on {data.contentfulBlogPost.publishDate} </span>
        <p>{data.contentfulBlogPost.excerpt.excerpt}</p>

        {data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={data.contentfulBlogPost.featuredImage.fluid}
            alt={data.contentfulBlogPost.featuredImage.title}
          />
        )}
        {documentToReactComponents(JSON.parse(body.raw), options)}

        <p>The article was publish in {data.contentfulBlogPost.publishDate}</p>
      </div>
    </Layout>
  )
}

export default BlogPost
