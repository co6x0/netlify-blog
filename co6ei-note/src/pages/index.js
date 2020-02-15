import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../layout/top'
import Image from '../components/Image'
import { css } from '@emotion/core'
import styles from '../components/styles'
import Seo from '../components/seo'

import IconArrow from '../images/svg/arrow-forward.svg'

const description = css`
  margin-top: 16px;
  color: ${styles.colors.mono3};
`

const toBlog = css`
  margin-top: 24px;
  display: inline-flex;
  align-items: center;
  background: ${styles.colors.primary1};
  border: 1px solid ${styles.colors.boundaryBlack};
  border-radius: 2px;
  padding: 8px 8px 8px 16px;

  > p {
    ${styles.texts.strong}
    color: ${styles.colors.mono6};
    margin-bottom: 0;
    margin-right: 16px;
    line-height: 1;
  }

  > svg {
    width: 16px;
    height: 16px;

    > path {
      fill: ${styles.colors.mono6};
    }
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
      <Image name="topgraphic.png" alt="" />
      <p css={description}>
        This site is {data.site.siteMetadata.description}.
      </p>
      <p>{process.env.GATSBY_TEST === 'foo' ? 'FOOOO!' : 'BARRRR!'}</p>
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.BRANCH}</p>
      <Link css={toBlog} to={'/blog'}>
        <p>Blog</p>
        <IconArrow />
      </Link>
    </Layout>
  )
}
