import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`cclc`, `blog`, `web`]} />
      <h2 style={{ textAlign: `center` }}>
        Don't jump to conclusion. We have to figure it out first.
      </h2>
      <Image
        filename="cover.jpg"
        alt="cover"
        style={{ width: `100%`, maxWidth: `564px`, margin: `0 auto` }}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
