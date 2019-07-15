import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Image from '../components/Image'
// import styles from '../components/styles'

const eyecatch = css`
  width: 100%;
  display: block;
  position: relative;

  &::before {
    content: '';
    padding-top: calc(100% / 3 * 2);
    width: 100%;
    display: block;
  }

  > div {
    position: absolute !important;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const blogWrap = css`
  width: 100%;
  display: block;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div css={eyecatch}>
        <Image name={post.frontmatter.thumbnail} alt="" />
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
