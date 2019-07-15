import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Image from '../components/Image'
import styles from '../components/styles'
// import styles from '../components/styles'

const eyecatch = css`
  width: 100%;
  display: block;
  position: relative;
  margin-bottom: 56px;

  &::before {
    content: '';
    padding-top: calc(100% / 3 * 2);
    width: 100%;
    display: block;
  }

  > :first-of-type {
    position: absolute !important;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
const category = css`
  ${styles.texts.mono}
  font-size: 17px;
  font-weight: 600;
  line-height: 124%;
  letter-spacing: 0.3px;
`

const postTags = css`
  margin: 24px auto 56px auto;
`

const blogWrap = css`
  width: 100%;
  display: block;

  h1 {
    ${styles.texts.heading}
    text-align: center;
    margin-top: 120px;
    padding-bottom: 16px;
    border-bottom: solid 1px ${styles.colors.mono1};
  }

  h2 {
    ${styles.texts.subhead}
    margin-top: 80px;
    margin-bottom: 16px;
  }

  h3 {
    ${styles.texts.callout}
    margin-top: 56px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 56px;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div css={eyecatch}>
        {post.frontmatter.thumbnail !== null ? (
          <Image name={post.frontmatter.thumbnail} alt="" />
        ) : (
          <Image name="thumbnail/default.png" alt="No eyecatch image" />
        )}
      </div>
      <h1>{post.frontmatter.title}</h1>
      <div css={postTags}>
        <p css={category}>
          <span>{post.frontmatter.category}</span>
        </p>
        {post.frontmatter.tags.map((data, i) => {
          return <p key={i}>{data}</p>
        })}
        <p>{post.frontmatter.date}</p>
      </div>
      <div css={blogWrap} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        templateKey
        tags
        date(formatString: "YYYY.MM.DD")
        thumbnail
        category
        description
        pickup
      }
    }
  }
`
