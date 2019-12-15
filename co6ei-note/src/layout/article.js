import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import GlobalStyles from '../components/GlobalStyles'
import HtmlHead from '../components/HtmlHead'
import SideNav from '../components/SideNav'

import SvgIcon from '../components/SvgIcon'
import styles from '../components/styles'

const wrap = css`
  display: grid;
  grid-template-columns: 1fr 400px;
  width: 100%;

  ${styles.grids('md')} {
    display: block;
  }
`

const main = css`
  margin: 0 200px;
  padding: 80px 0;
  max-width: 720px;

  ${styles.grids('xl')} {
    margin: 0 64px;
  }

  ${styles.grids('md')} {
    margin: 0 32px;
    width: calc(100% - 64px);
  }
`

const siteNames = css`
  margin-bottom: 80px;
  p {
    ${styles.texts.mono}
    color: ${styles.colors.mono1};
    margin-top: 12px;
    margin-bottom: 0;
  }

  ${styles.grids('md')} {
    margin-bottom: 32px;

    .svg-icon {
      > img {
        width: 180px;
      }
    }
  }
`

export default ({ children }) => {
  return (
    <div css={wrap}>
      <GlobalStyles />
      <HtmlHead />

      <main css={main}>
        <header>
          <div css={siteNames}>
            <Link to={`/`}>
              <SvgIcon name="co6ei_note-logo" alt="co6ei note" />
              <p>Nao Komura's memorandum</p>
            </Link>
          </div>
        </header>

        {children}
      </main>

      <SideNav />
    </div>
  )
}
