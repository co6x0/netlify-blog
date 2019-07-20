const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
  // const tagTemplate = path.resolve('./src/templates/tags.js')

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const slicePath = node.fields.slug.substring(
        node.fields.slug.indexOf('/articles') + 9
      )
      const outputPath = path.join('/blog', slicePath)

      createPage({
        path: outputPath,
        component: path.resolve(blogPostTemplate),
        context: {
          id: node.id,
        },
      })
    })
  })
}
