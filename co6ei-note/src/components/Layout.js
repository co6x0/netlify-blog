import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { css } from '@emotion/core'

import Image from './Image'
import SvgIcons from './SvgIcons'
import GlobalStyles from './GlobalStyles'
import styles from './styles'

//import SVG images
import Logo from '../images/co6ei_note-logo.svg'

const wrap = css`
  max-width: 928px;
  margin: 0 auto;
  padding: 0 16px;
`
const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto 40px auto;
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
    ${styles.texts.body}
    margin-left: 16px;

    &:nth-of-type(1) {
      margin-left: 0;
    }
  }
`

export default ({ children, filenames }) => {
  filenames = {
    signyan: 'signyan.png',
    gatsby: 'gatsby-icon.png',
  }

  const iconnames = {
    design: 'categoryDesign',
    development: 'categoryDevelopment',
    music: 'categoryMusic',
    other: 'categoryOther',
  }

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
        <html lang="ja" />
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
            <Image filename={filenames.signyan} />
            <Logo alt="co6ei note" />
          </Link>
        </div>
      </header>
      <aside>
        <nav css={nav}>
          <Link to={`/`}>
            <p>Home</p>
          </Link>
          <Link to={`/blog`}>
            <p>Blog</p>
          </Link>
        </nav>

        <SvgIcons name={iconnames.design} />
        <SvgIcons name={iconnames.development} />
        <SvgIcons name={iconnames.music} />
        <SvgIcons name={iconnames.other} />
      </aside>

      {children}
    </div>
  )
}
