import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { css } from '@emotion/core'
import styles from '../components/styles'
import Seo from '../components/seo'

const description = css`
  color: ${styles.colors.mono3};
`

const toBlog = css`
  ${styles.texts.callout}
  margin-top: 24px;
  display: inline-block;

  > p {
    margin-bottom: 0;
  }
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
      <Seo />
      <h1>hello.</h1>
      <p css={description}>
        This site is {data.site.siteMetadata.description}.
      </p>
      <Link css={toBlog} to={'/blog'}>
        <p>Blog -></p>
      </Link>
    </Layout>
  )
}
