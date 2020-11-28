import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layout/article'

import SvgIcon from '../components/SvgIcon'

import { css } from '@emotion/core'
import styles from '../components/styles'
import Seo from '../components/seo'

const articleWrap = css`
  margin-bottom: 56px;
  border-bottom: solid 1px ${styles.colors.boundaryBlack};
  padding-bottom: 16px;

  h1 {
    ${styles.texts.heading}
    margin-bottom: 12px;
  }

  .excerpt {
    ${styles.texts.text}
    color: ${styles.colors.mono3};
  }

  ${styles.grids('md')} {
    margin-bottom: 40px;
    h1 {
      ${styles.texts.subhead}
    }
  }
`

const postInfo = css`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${styles.grids('md')} {
    display: block;
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

  p {
    margin-bottom: 0;
  }

  .svg-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`

const pagenation = css`
  margin-top: 40px;
  a {
    background: ${styles.colors.primary1};
    color: ${styles.colors.mono6};
    width: 40px;
    display: inline-block;
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin-right: 12px;

    &.current {
      background: transparent;
      color: ${styles.colors.primary1};
      border: solid 1px ${styles.colors.primary1};
    }
  }
`

export const query = graphql`
  query($skip: Int!, $limit: Int!, $dir: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC },
      filter: {fields: {slug: {regex: $dir}}},
      skip: $skip,
      limit: $limit
    ) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 220)
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
          id
        }
      }
    }
  }
`

export default ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark

  const seoPageNum =
    pageContext.pageNumber !== 0 ? ` Page ${pageContext.pageNumber + 1}` : ''

  function postCategorySlug(categories) {
    if (categories[0] === 'Design') {
      return 'design'
    } else if (categories[0] === 'Development') {
      return 'development'
    } else if (categories[0] === 'Music') {
      return 'development'
    } else {
      return 'other'
    }
  }

  return (
    <Layout>
      <Seo title={`Blog Archive${seoPageNum}`} />
      <div>
        {posts.edges.map(({ node }) => (
          <article css={articleWrap} key={node.id}>
            <Link to={node.fields.slug}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <div css={postInfo}>
              <div css={categoryAndTag}>
                <div>
                  <SvgIcon
                    name={`category-${postCategorySlug(
                      node.frontmatter.category
                    )}`}
                  />
                  <p>{node.frontmatter.category}</p>
                </div>
                <ul>
                  {node.frontmatter.tags.map((data, i) => {
                    return <li key={i}>{data}</li>
                  })}
                </ul>
              </div>

              <div css={postDate}>
                <SvgIcon name="mdi-edit-gray" />
                <p>{node.frontmatter.date}</p>
              </div>
            </div>

            <Link className="excerpt" to={node.fields.slug}>
              <p>{node.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
      <nav css={pagenation}>
        {pageContext.pagePaths.map((pagePath, pageNumber) => {
          return (
            <Link
              to={pagePath}
              key={pageNumber}
              className={pageNumber === pageContext.pageNumber ? 'current' : ''}
            >
              {pageNumber + 1}
            </Link>
          )
        })}
      </nav>
    </Layout>
  )
}
