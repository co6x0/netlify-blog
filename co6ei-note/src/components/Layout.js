import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import GlobalStyles from './GlobalStyles'

const wrap = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
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
    <main css={wrap}>
      <GlobalStyles />
      <Helmet>
        <meta charset="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/tnb1vfr.css"
        ></link>
      </Helmet>

      <header>
        <Link to={`/`}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <p>{data.site.siteMetadata.description}</p>
        <nav>
          <Link to={`/`}>
            <p>Home</p>
          </Link>
          <Link to={`/blog`}>
            <p>Blog</p>
          </Link>
        </nav>
      </header>

      <p>YOOOOOOO TEST</p>
      {children}
    </main>
  )
}
