import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <div>Hello world!</div>
      <h1>Test Page</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title} </h3>
          <p>{node.frontmatter.description}</p>
          <p>{node.frontmatter.date}</p>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            description
            date(formatString: "YYYY.MM.DD")
          }
          html
        }
      }
    }
  }
`
