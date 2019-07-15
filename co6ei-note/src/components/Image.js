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
              name
              publicURL
              relativePath
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

  function getImage(name, alt) {
    const image = data.images.edges.find(n =>
      n.node.relativePath.includes(name)
    )

    if (!image) return null

    if (image.node.relativePath.indexOf('.gif') !== -1) {
      console.log(image.node.relativePath)
      return <img src={image.node.publicURL} alt="" />
    } else {
      console.log(image.node.relativePath)
      const imageSizes = image.node.childImageSharp.sizes
      return <Img alt={alt} sizes={imageSizes} />
    }
  }

  return getImage(name, alt)
}
