import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div style={{ marginBottom: 20 }}>
    <Link to={post.frontmatter.path}>
      <div>
        <p
          style={{
            fontWeight: "bolder",
            fontSize: `1.25rem`,
            marginBottom: 10,
            color: `black`,
          }}
        >
          {post.frontmatter.title}{" "}
        </p>
        <p
          style={{
            fontWeight: "lighter",
            fontSize: `0.75rem`,
            marginBottom: 0,
            color: `black`,
          }}
        >
          {post.excerpt}{" "}
        </p>
        <p style={{ fontWeight: "bolder", color: `grey`, float: `left` }}>
          {post.frontmatter.date}{" "}
        </p>
        <p
          style={{
            fontWeight: "bolder",
            color: `green`,
            float: `left`,
            paddingLeft: 20,
          }}
        >
          {post.frontmatter.tags.map(function(val) {
            return (
              <span
                key={val}
                style={{
                  border: `1px solid black`,
                  borderRadius: `10px`,
                  fontWeight: `100`,
                  marginLeft: 10,
                  padding: `0px 3px`,
                }}
              >
                {val}
              </span>
            )
          })}
        </p>
        <div style={{ clear: `both` }} />
      </div>
    </Link>
  </div>
)

export default PostLink
