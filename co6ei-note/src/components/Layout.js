import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Image from './Image'
import SvgIcon from './SvgIcon'
import GlobalStyles from './GlobalStyles'
import styles from './styles'

const wrap = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 400px;
  width: 100%;
`

const main = css`
  margin: 0 200px;
  padding: 80px 0;
`

const sidePane = css`
  background: ${styles.colors.mono5};
  height: 100%;
  min-height: 100vh;
  padding: 0 64px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: ${styles.colors.boundaryBlack};
  }

  .side-pane-box {
    position: sticky;
    top: 0;
    height: 100vh;
    padding-top: 80px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    nav {
      .nav-category {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;

        > p {
          display: inline-block;
          width: calc(100% - 32px - 16px);
          color: ${styles.colors.mono1};
          ${styles.texts.mono};
          font-weight: 600;
          font-size: 17px;
          line-height: 16px;
          letter-spacing: 0.3px;
          margin-bottom: 0;
        }
      }
    }
  }
`

const profile = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .gatsby-image-wrapper {
    width: 88px;
  }

  > div {
    .external-link {
      margin-bottom: 16px;
      display: flex;

      a {
        margin-right: 16px;
        height: 24px;
      }
    }
    small {
      ${styles.texts.small}
      color: ${styles.colors.mono3};
      white-space: nowrap;
    }
  }
`

const siteNames = css`
  margin-bottom: 80px;
  p {
    ${styles.texts.mono}
    color: ${styles.colors.mono1};
    margin-top: 12px;
  }
`

export default ({ children }) => {
  const webfont = `
  (function(d) {
    var config = {
      kitId: 'mwe2mhl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  `

  return (
    <div css={wrap}>
      <GlobalStyles />
      <Helmet>
        <html lang="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script>{webfont}</script>
        <link rel="stylesheet" href="https://use.typekit.net/cak8saa.css" />
      </Helmet>

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

      <aside css={sidePane}>
        <div className="side-pane-box">
          <nav>
            <Link className="nav-category" to={`/blog`}>
              <SvgIcon name="category-design" alt="" />
              <p>Design</p>
              <SvgIcon name="arrow-forward" alt="カテゴリー一覧へ" />
            </Link>
            <Link className="nav-category" to={`/`}>
              <SvgIcon name="category-development" alt="" />
              <p>Development</p>
              <SvgIcon name="arrow-forward" alt="カテゴリー一覧へ" />
            </Link>
            <Link className="nav-category" to={`/`}>
              <SvgIcon name="category-music" alt="" />
              <p>Music</p>
              <SvgIcon name="arrow-forward" alt="カテゴリー一覧へ" />
            </Link>
            <Link className="nav-category" to={`/`}>
              <SvgIcon name="category-other" alt="" />
              <p>Other</p>
              <SvgIcon name="arrow-forward" alt="カテゴリー一覧へ" />
            </Link>
          </nav>
          <div css={profile}>
            <Image name="signyan.png" alt="signyan" />
            <div>
              <div className="external-link">
                <a href="https://twitter.com/co6ei">
                  <SvgIcon name="logo-twitter" alt="Twitter" />
                </a>
                <a href="https://note.mu/sixa_nao">
                  <SvgIcon name="logo-note" alt="note" />
                </a>
                <a href="https://github.com/naokomura">
                  <SvgIcon name="logo-github" alt="GitHub" />
                </a>
              </div>
              <small>copyright © 2019 Nao Komura</small>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
