import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SvgIcon from '../components/SvgIcon'
import styles from '../components/styles'
import Seo from '../components/seo'

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

const postInfo = css`
  margin: 24px auto 56px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const categoryAndTag = css`
  display: flex;

  > div {
    display: flex;
    align-items: center;
    margin-right: 16px;
    .svg-icon {
      margin-right: 8px;
      width: 16px;
      height: auto;
      display: flex;
    }
    p {
      ${styles.texts.mono}
      font-size: 17px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0.3px;
      margin-bottom: 0;
    }
  }

  > ul {
  list-style: none;
    > li {
      ${styles.texts.caption}
      background: ${styles.colors.primary5};
      color: ${styles.colors.primary2};
      padding: 0 8px;
      display: inline-block;
      margin-right: 8px;
    }
  }
`

const postDate = css`
  ${styles.texts.caption}
  color: ${styles.colors.mono3};
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0;
  }

  .svg-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
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
    ${styles.texts.body}
    margin-bottom: 40px;
  }

  blockquote {
    color: ${styles.colors.mono3};
    border-left: solid 4px;
    padding: 8px 0 8px 16px;
    box-sizing: border-box;
    margin-bottom: 40px;

    > p:last-of-type {
      margin-bottom: 0;
    }
  }

  pre {
    background-color: ${styles.colors.mono1};
    color: ${styles.colors.mono6};
    padding: 16px;
    margin-bottom: 40px;
    border-radius: 2px;
  }
`

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
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
      fields {
        slug
      }
    }
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  console.log(post)

  const seoTwitterCardType =
    post.frontmatter.thumbnail !== null ? 'summary_large_image' : 'summary'

  const seoDescription =
    post.frontmatter.description !== null
      ? post.frontmatter.description
      : post.excerpt

  const seoImage =
    post.frontmatter.thumbnail !== null
      ? 'default.png'
      : post.frontmatter.thumbnail

  let categoryName
  if (post.frontmatter.category[0] === 'Design') {
    categoryName = 'design'
  } else if (post.frontmatter.category[0] === 'Development') {
    categoryName = 'development'
  } else if (post.frontmatter.category[0] === 'Music') {
    categoryName = 'development'
  } else {
    categoryName = 'other'
  }

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={seoDescription}
        image={seoImage}
        pathname={post.fields.slug}
        cardType={seoTwitterCardType}
        article
      />
      <div css={eyecatch}>
        {post.frontmatter.thumbnail !== null ? (
          <Image name={post.frontmatter.thumbnail} alt="" />
        ) : (
          <Image name="thumbnail/default.png" alt="No eyecatch image" />
        )}
      </div>
      <h1>{post.frontmatter.title}</h1>
      <div css={postInfo}>
        <div css={categoryAndTag}>
          <div>
            <SvgIcon name={`category-${categoryName}`} />
            <p>{post.frontmatter.category}</p>
          </div>
          <ul>
            {post.frontmatter.tags.map((data, i) => {
              return <li key={i}>{data}</li>
            })}
          </ul>
        </div>
        <div css={postDate}>
          <SvgIcon name="mdi-edit-gray" />
          <p>{post.frontmatter.date}</p>
        </div>
      </div>
      <div css={blogWrap} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
