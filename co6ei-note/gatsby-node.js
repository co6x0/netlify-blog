const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const dir =
    process.env.NODE_ENV === 'production' ? '^/blog\//' : '^/blog-test\//'

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date]},
        filter: {fields: {slug: {regex: "${dir}"}}}
      ){
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
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(__dirname, './src/templates/BlogPost.js'),
        context: {
          id: node.id,
        },
      })
    })

    const limit = 4
    const numberOfPages = Math.ceil(posts.length / limit)
    const pagePaths = Array.from({ length: numberOfPages }).map(
      (_, pageNumber) => {
        return pageNumber === 0
          ? '/blog'
          : path.join('/blog', '/page', `/${pageNumber + 1}`)
      }
    )

    pagePaths.forEach((pagePath, pageNumber) => {
      const skip = pageNumber * limit
      createPage({
        path: pagePath,
        component: path.resolve(__dirname, './src/templates/BlogIndex.js'),
        context: {
          skip,
          limit,
          dir,
          numberOfPages,
          pagePaths,
          pageNumber,
        },
      })
    })
  })
}
