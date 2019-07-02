import React from 'react'
import { Global, css } from '@emotion/core'
import { darken } from 'polished'
import styles from '../components/styles'

export default () => {
  return (
    <Global
      styles={css`
        body {
          font-family: prestige-elite-std;
          ${styles.texts.body}
        }
        a {
          color: ${styles.colors.link};

          &:visited {
            color: ${darken(0.2, styles.colors.link)};
          }
        }
      `}
    />
  )
}
