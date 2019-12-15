import React from 'react'
import { css } from '@emotion/core'

import GlobalStyles from '../components/GlobalStyles'
import HtmlHead from '../components/HtmlHead'
import SideNav from '../components/SideNav'

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
  padding-bottom: 80px;
  max-width: 720px;

  ${styles.grids('xl')} {
    margin: 0 64px;
  }

  ${styles.grids('md')} {
    margin: 0 32px;
    width: calc(100% - 64px);
  }
`

export default ({ children }) => {
  return (
    <div css={wrap}>
      <GlobalStyles />
      <HtmlHead />

      <main css={main}>
        {children}
      </main>

      <SideNav />
    </div>
  )
}
