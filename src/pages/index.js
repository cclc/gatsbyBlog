import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Blog from "../templates/blogTemplate";
import PostLink from "../components/post-link"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <div>~~~~~~~~</div>
//     <Blog></Blog>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

const IndexPage = ({ data: { allMarkdownRemark: { edges }}} ) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  // return <div>{Posts}</div>
  return (
    <Layout>
      <SEO title="Home" keywords={[`cclc`, `blog`, `web`]} />
      <h2>Don't jump to conclusion. We have to figure it out first.</h2>
      <Image filename="cover.jpg" alt="cover" style={{ width: `100%`, maxWidth: `564px`, margin:`0 auto` }} />
      {/* <div>{Posts}</div> */}
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