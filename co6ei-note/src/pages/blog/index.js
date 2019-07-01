import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default ({ data }) => {
  return (
    <Layout>
      <h1>Blog Page</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title} </h3>
            <p>{node.frontmatter.description}</p>
            <p>{node.frontmatter.date}</p>
            <div>{node.excerpt}</div>
          </Link>
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            tags
            description
            date(formatString: "YYYY.MM.DD")
          }
          html
          excerpt
        }
      }
      totalCount
    }
  }
`
