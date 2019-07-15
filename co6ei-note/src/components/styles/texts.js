import { css } from '@emotion/core'

const fontFamily = `lato, source-han-sans-japanese, -apple-system, BlinkMacSystemFont, Roboto, "游ゴシック体", YuGothic, "Yu Gothic Medium", sans-serif`
const fontFamilyMono = `prestige-elite-std, monospace`

const texts = {
  title: css`
    font-family: ${fontFamily};
    font-size: 46px;
    line-height: 124%;
    font-weight: 600;
    letter-spacing: -0.4px;
  `,
  heading: css`
    font-family: ${fontFamily};
    font-size: 36px;
    line-height: 120%;
    font-weight: 600;
    letter-spacing: 0.6px;
  `,
  subhead: css`
    font-family: ${fontFamily};
    font-size: 29px;
    line-height: 134%;
    font-weight: 600;
    letter-spacing: 0.2px;
  `,
  callout: css`
    font-family: ${fontFamily};
    font-size: 24px;
    line-height: 134%;
    font-weight: 600;
    letter-spacing: 0.4px;
  `,
  strong: css`
    font-family: ${fontFamily};
    font-size: 17px;
    line-height: 200%;
    font-weight: 600;
    letter-spacing: 0.3px;
  `,
  body: css`
    font-family: ${fontFamily};
    font-size: 17px;
    line-height: 200%;
    letter-spacing: 0.5px;
  `,
  caption: css`
    font-family: ${fontFamily};
    font-size: 14px;
    line-height: 170%;
    letter-spacing: 0.6px;
  `,
  text: css`
    font-family: ${fontFamily};
    font-size: 15px;
    line-height: 151%;
    letter-spacing: 0.3px;
  `,
  small: css`
    font-family: ${fontFamily};
    font-size: 12px;
    line-height: 145%;
    letter-spacing: 0.2px;
  `,
  mono: css`
    font-family: ${fontFamilyMono};
    font-size: 13px;
    line-height: 145%;
    letter-spacing: 0.8px;
  `,
}

export default texts
