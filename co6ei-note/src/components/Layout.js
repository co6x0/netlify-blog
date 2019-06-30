import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, Link, graphql } from 'gatsby'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <main>
      <Helmet>
        <meta charset="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Helmet>
      <Link to={`/`}>
        <h3>{data.site.siteMetadata.title}</h3>
        <p>{data.site.siteMetadata.description}</p>
      </Link>
      {children}
    </main>
  )
}