import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ name, alt }) => {
  const data = useStaticQuery(
    graphql`
      {
        svgs: allFile(filter: { extension: { eq: "svg" } }) {
          edges {
            node {
              name
              publicURL
            }
          }
        }
      }
    `
  )

  function getImage(name) {
    const svg = data.svgs.edges.find(n => n.node.publicURL.includes(name))

    if (!svg) return null

    const path = svg.node.publicURL
    return path
  }

  return (
    <div className="svg-icon">
      <img src={getImage(name)} alt={alt} />
    </div>
  )
}
