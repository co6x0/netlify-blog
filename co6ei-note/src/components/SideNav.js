import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Image from './Image'
import SvgIcon from './SvgIcon'
import styles from './styles'

const sidePane = css`
  background: ${styles.colors.mono5};
  height: 100%;
  min-height: 100vh;
  padding: 0 64px;
  position: relative;

  ${styles.grids('md')} {
    padding: 0 32px;
  }

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

export default () => {
  return (
    <aside css={sidePane}>
      <div className="side-pane-box">
        <nav>
          <Link className="nav-category" to={`/`}>
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
  )
}
