import { css } from '@emotion/core'

const fontFamily = `font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue","游ゴシック Medium",YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN",メイリオ,Meiryo,sans-serif;`

const texts = {
  body: css`
    font-family: ${fontFamily};
    font-size: 14px;
    line-height: 110%;
  `,
  strong: css`
    font-family: ${fontFamily};
    font-size: 14px;
    line-height: 110%;
    font-weight: 600;
  `,
}

export default texts
