import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { css } from '@emotion/core'
import styles from '../../components/styles'
import Seo from '../../components/seo'

const row = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: minmax(160px, auto);
  column-gap: 16px;
  row-gap: 16px;
`

const blogCard = css`
  border: solid 1px ${styles.colors.boundaryBlack};
  border-radius: 4px;
  padding: 16px 16px 32px 16px;
  position: relative;
    border-bottom: solid 4px ${styles.colors.primary1};

  h2 {
    ${styles.texts.subhead}
    color: ${styles.colors.primary2};
    margin-bottom: 8px;
  }

  div:nth-of-type(1) {
    display: flex;
    > p {
      ${styles.texts.small}
      background: ${styles.colors.mono5};
      border-radius: 99px;
      color: ${styles.colors.mono3};
      padding: 4px 16px;
      line-height: 1;
      margin-right: 4px;
    }
  }

  div:nth-of-type(2) {
    color: ${styles.colors.mono3};
  }

  time {
    position: absolute;
    display: inline-block;
    bottom: 8px;
    right: 16px;
    color: ${styles.colors.mono4};
  }
`

const title = css`
  color: ${styles.colors.mono4};
`

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            tags
            date(formatString: "YYYY.MM.DD")
          }
          html
          excerpt
        }
      }
      totalCount
    }
  }
`

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  const test = posts.map(({ node }) => {
    const slicePath = node.fields.slug.substring(
      node.fields.slug.indexOf('/articles') + 9
    )
    const outputPath = `/blog${slicePath}`
    return outputPath
  })

  return (
    <Layout>
      <Seo title="Blog Archive" description="ブログ一覧ページ" />
      <h1 css={title}>Blog Page</h1>

      <div css={row}>
        {posts.map(({ node }, i) => (
          <div css={blogCard} key={node.id}>
            <Link to={test[i]}>
              <h2>{node.frontmatter.title}</h2>
              <div>
                {/* Export Tags */}
                {node.frontmatter.tags.map((data, j) => {
                  return <p key={j}>{data}</p>
                })}
              </div>
              <div>{node.excerpt}</div>
              <time>{node.frontmatter.date}</time>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}