import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { css } from '@emotion/core'
import styles from '../../components/styles'

const blogCard = css`
  border: solid 1px ${styles.colors.boundaryBlack};
  border-radius: 4px;
  margin-bottom: 24px;
  padding: 16px;

  h2 {
    ${styles.texts.subhead}
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <h1>Blog Page</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div css={blogCard} key={node.id}>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>

            {node.frontmatter.tags.map(data => {
              return <p>{data}</p>
            })}

            <p>{node.frontmatter.date}</p>
            <div>{node.excerpt}</div>
          </Link>
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
