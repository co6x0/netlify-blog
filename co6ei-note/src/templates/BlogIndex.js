import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

// import { css } from '@emotion/core'
// import styles from '../components/styles'
import Seo from '../components/seo'

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`

export default ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark

  const seoPageNum =
    pageContext.pageNumber !== 0 ? ` Page ${pageContext.pageNumber + 1}` : ''

  return (
    <Layout>
      <Seo title={`Blog Archive${seoPageNum}`} />
      <div>
        {posts.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <div>
              <span>投稿日: {node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
      <nav>
        {pageContext.pagePaths.map((pagePath, pageNumber) => {
          return (
            <Link to={pagePath} key={pageNumber}>
              {pageNumber + 1}
            </Link>
          )
        })}
      </nav>
    </Layout>
  )
}
