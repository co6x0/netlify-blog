import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { css } from '@emotion/core'
import styles from '../components/styles'

const description = css`
  color: ${styles.colors.mono3};
`

export default ({ data }) => {
  const meta = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  return (
    <Layout>
      <h1>hello.</h1>
      <p css={description}>
        This site is {meta.site.siteMetadata.description}.
      </p>
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
