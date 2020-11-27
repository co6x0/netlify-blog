import { css } from '@emotion/core'

const fontFamily = `-apple-system-subset, Hiragino Sans, BlinkMacSystemFont, Roboto, '游ゴシック体', YuGothic, 'Yu Gothic Medium', sans-serif`
const fontFamilyMono = `'Courier Prime', monospace`

const texts = {
  title: css`
    font-family: ${fontFamily};
    font-size: 44px;
    line-height: 124%;
    font-weight: 700;
    letter-spacing: -0.4px;
  `,
  heading: css`
    font-family: ${fontFamily};
    font-size: 33px;
    line-height: 120%;
    font-weight: 700;
    letter-spacing: 0.6px;
  `,
  subhead: css`
    font-family: ${fontFamily};
    font-size: 29px;
    line-height: 134%;
    font-weight: 700;
    letter-spacing: 0.2px;
  `,
  callout: css`
    font-family: ${fontFamily};
    font-size: 22px;
    line-height: 134%;
    font-weight: 700;
    letter-spacing: 0.4px;
  `,
  strong: css`
    font-family: ${fontFamily};
    font-size: 17px;
    line-height: 200%;
    font-weight: 700;
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
    font-size: 16px;
    line-height: 145%;
    letter-spacing: 0.4px;
  `,
}

export default texts
