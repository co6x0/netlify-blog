import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { css } from '@emotion/core'
import styles from '../components/styles'

const description = css`
  color: ${styles.colors.mono3};
`

export default () => {
  const data = useStaticQuery(
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
        This site is {data.site.siteMetadata.description}.
      </p>
    </Layout>
  )
}
