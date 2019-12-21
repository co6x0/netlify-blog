import React from 'react'
import { Global, css } from '@emotion/core'
// import { darken } from 'polished'
import styles from '../components/styles'
import './styles/reset.css'

export default () => {
  return (
    <Global
      styles={css`
        @font-face {
          /* Only SF font without Japanese font*/
          font-family: "-apple-system-subset";
          src: local(-apple-system);
          unicode-range: U+0000-05C7;
        }
        body {
          ${styles.texts.text}
          color: ${styles.colors.mono1};
        }
        em {
          font-style: normal;
        }
        h1 {
          ${styles.texts.title}
          margin-bottom: 40px;
        }
        h2 {
          ${styles.texts.heading}
          margin-bottom: 24px;
        }
        h3,
        h4,
        h5,
        h6 {
          ${styles.texts.strong}
          margin-bottom: 16px;
        }
        p {
          margin-bottom: 4px;
        }
        a {
          color: ${styles.colors.primary2};
          text-decoration: none;
        }
      `}
    />
  )
}
