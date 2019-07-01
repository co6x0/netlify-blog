import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data }) => {
  return (
    <Layout>
      <h1>hello.</h1>
    </Layout>
  )
}

export const query = graphql`
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
