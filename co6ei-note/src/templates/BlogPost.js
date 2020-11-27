import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../layout/article'
import Image from '../components/Image'
import SvgIcon from '../components/SvgIcon'
import Seo from '../components/seo'
import styles from '../components/styles'

const eyecatch = css`
  width: 100%;
  display: block;
  position: relative;
  margin-bottom: 56px;

  &::before {
    content: '';
    padding-top: calc(100% / 1.91);
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

  ${styles.grids('md')} {
    margin-bottom: 32px;
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`

const title = css`
  ${styles.texts.title}

  ${styles.grids('md')} {
    ${styles.texts.heading}
  }
`

const postInfo = css`
  margin: 24px auto 56px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${styles.grids('md')} {
    display: block;
    margin: 16px auto;
  }
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
      height: 16px;
      display: flex;
    }
    p {
      ${styles.texts.mono}
      line-height: 1;
      margin-bottom: 0;
    }
  }

  > ul {
  list-style: none;
  margin-bottom: -4px;
  margin-right: 16px;

    > li {
      ${styles.texts.caption}
      background: ${styles.colors.primary5};
      color: ${styles.colors.primary2};
      padding: 0 8px;
      display: inline-block;
      margin-right: 4px;
      margin-bottom: 4px;
    }
  }

  ${styles.grids('md')} {
    display: block;

    > ul {
      margin: 12px auto;
    }
  }
`

const postDate = css`
  ${styles.texts.caption}
  color: ${styles.colors.mono3};
  display: flex;
  align-items: center;

  .svg-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }

  p {
    margin-bottom: 0;
  }
`

const blogWrap = css`
  width: 100%;
  display: block;

  ${styles.grids('md')} {
    margin-top: 40px;
  }

  h1 {
    ${styles.texts.heading}
    text-align: center;
    margin-top: 120px;
    padding-bottom: 16px;
    border-bottom: solid 1px ${styles.colors.mono1};
    word-break: break-all;

    ${styles.grids('md')} {
      ${styles.texts.callout}
      margin-top: 96px;
    }
  }

  h2 {
    ${styles.texts.subhead}
    margin-top: 80px;
    margin-bottom: 16px;
    ${styles.grids('md')} {
      ${styles.texts.callout};
      margin-top: 64px;
    }
  }

  h3 {
    ${styles.texts.callout}
    margin-top: 56px;
    margin-bottom: 16px;
    ${styles.grids('md')} {
      ${styles.texts.strong};
      margin-top: 40px;
    }
  }

  hr {
    margin: 56px auto;
    border: none;
    border-bottom: solid 1px ${styles.colors.boundaryBlack};
  }

  ul, ol {
    ${styles.texts.body}
    padding-left: 40px;
    margin-bottom: 40px;

    > li {
      ${styles.texts.body}

      > code {
        ${styles.texts.mono}
        background: ${styles.colors.mono5};
        color: ${styles.colors.secondary1};
        border: solid 1px ${styles.colors.boundaryBlack};
        padding: 4px 8px;
        border-radius: 4px;
        margin: 0 4px;
        transform: translateY(-2px);
        display: inline-block;
        line-height: 1;
      }

      ${styles.grids('md')} {
        ${styles.texts.text}
        margin-bottom: 32px;
        line-height: 178%;
      }
    }
  }

  p {
    ${styles.texts.body}
    margin-bottom: 40px;

    a {
      word-break: break-all;
    }

    code {
      ${styles.texts.mono}
      background: ${styles.colors.mono5};
      color: ${styles.colors.secondary1};
      border: solid 1px ${styles.colors.boundaryBlack};
      padding: 4px 8px;
      border-radius: 4px;
      margin: 0 4px;
      transform: translateY(-2px);
      display: inline-block;
      line-height: 1;
    }

    img {
      width: 100%;
    }

    ${styles.grids('md')} {
      ${styles.texts.text}
      margin-bottom: 32px;
      line-height: 178%;

      code {
        padding: 2px 6px;
        word-break: break-all;
        display: inline;
      }
    }
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
    overflow-x: scroll;

    code {
      ${styles.texts.mono}
      ${styles.grids('md')} {
        font-size: 14px;
      }
    }
  }
`

const tableOfContents = css`
  display: block;
  border-radius: 2px;
  background: ${styles.colors.mono5};
  padding: 24px;
  margin: 40px auto;

  > h1 {
    ${styles.texts.callout}
    margin-bottom: 16px;
  }
  
  > div {
    > ul {
      padding-left: 24px;
      > li {
        a {
          font-weight: 700;
          display: inline-block;
          margin-bottom: 8px;
          color: ${styles.colors.mono2};
        }
        > ul {
          padding-left: 24px;
          a {
            font-weight: 400;
            display: inline-block;
            margin-bottom: 8px;
            color: ${styles.colors.mono2};
          }
        }
      }
    }
  }
`

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents(
        absolute: true
        maxDepth: 2
      )
      excerpt(truncate: true)
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
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 1200) {
            src
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  const images = data.allImageSharp.edges

  const featureImageSrc = images.find(n =>
    n.node.fluid.src.includes(post.frontmatter.thumbnail)
  )

  const seoTwitterCardType =
    post.frontmatter.thumbnail !== null ? 'summary_large_image' : 'summary'

  const seoDescription =
    post.frontmatter.description !== null
      ? post.frontmatter.description
      : post.excerpt

  const seoImage =
    post.frontmatter.thumbnail !== null
      ? featureImageSrc.node.fluid.src
      : '/default.png'

  const categoryName = () => {
    const category = post.frontmatter.category[0]
    if (category === 'Design') return 'design'
    else if (category === 'Development') return 'development'
    else if (category === 'Music') return 'music'
    else return 'other'
  }

  const postNavigation = () => {
    if (!post.tableOfContents.length) return
    return (
      <nav css={tableOfContents}>
        <h1>目次</h1>
        <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
      </nav>
    )
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
      <h1 css={title}>{post.frontmatter.title}</h1>
      <div css={postInfo}>
        <div css={categoryAndTag}>
          <div>
            <SvgIcon name={`category-${categoryName()}`} />
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
      {postNavigation()}
      <article css={blogWrap} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
