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
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_noBase64
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
      return <img src={image.node.publicURL} alt="" />
    } else {
      const imageSizes = image.node.childImageSharp.fluid
      return <Img alt={alt} fluid={imageSizes} />
    }
  }

  return getImage(name, alt)
}
