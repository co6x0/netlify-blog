import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ name, alt }) => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      }
    `
  )

  function getImage(filename, alt) {
    const image = data.images.edges.find(n =>
      n.node.relativePath.includes(filename)
    )

    if (!image) return null

    const imageSizes = image.node.childImageSharp.sizes
    return <Img alt={alt} sizes={imageSizes} />
  }

  return getImage(name, alt)
}
