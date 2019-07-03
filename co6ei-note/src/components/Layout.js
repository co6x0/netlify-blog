import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import GlobalStyles from './GlobalStyles'
import styles from '../components/styles'

const wrap = css`
  max-width: 928px;
  margin: 0 auto;
  padding: 0 16px;
`
const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const siteNames = css`
  em {
    ${styles.texts.title}
  }
  p {
    ${styles.texts.caption}
    color: ${styles.colors.mono3};
  }
`

const nav = css`
  display: flex;
  > a {
    margin-left: 16px;

    &:nth-of-type(1) {
      margin-left: 0;
    }
  }
`

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <div css={wrap}>
      <GlobalStyles />
      <Helmet>
        <meta charset="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src={'webfont.js'}></script>
      </Helmet>

      <header css={header}>
        <div css={siteNames}>
          <Link to={`/`}>
            <em>{data.site.siteMetadata.title}</em>
          </Link>
          <p>{data.site.siteMetadata.description}</p>
        </div>
        <nav css={nav}>
          <Link to={`/`}>
            <p>Home</p>
          </Link>
          <Link to={`/blog`}>
            <p>Blog</p>
          </Link>
        </nav>
      </header>

      {children}
    </div>
  )
}
