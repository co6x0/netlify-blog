import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Twitter from './Twitter'
import Facebook from './Facebook'

function Seo({ title, description, image, pathname, cardType, article }) {
  const useSiteMetadata = () => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              defaultTitle: title
              defaultDescription: description
              siteUrl: url
              defaultImage: image
              twitterUsername
              facebookAppId
            }
          }
        }
      `
    )
    return site.siteMetadata
  }

  const defaultTitle = useSiteMetadata().defaultTitle
  const defaultDescription = useSiteMetadata().defaultDescription
  const siteUrl = useSiteMetadata().siteUrl
  const defaultImage = useSiteMetadata().defaultImage
  const twitterUsername = useSiteMetadata().twitterUsername
  const facebookAppId = useSiteMetadata().facebookAppId

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`,
    cardType: cardType || 'summary_large_image',
  }

  const metaTitle =
    seo.title === defaultTitle ? seo.title : `${seo.title} | ${defaultTitle}`

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>
      <Facebook
        pageUrl={seo.url}
        type={article ? 'article' : null}
        title={seo.title}
        description={seo.description}
        image={seo.image}
        appID={facebookAppId}
      />
      <Twitter
        cardType={seo.cardType}
        username={twitterUsername}
        title={seo.title}
        description={seo.description}
        image={seo.image}
      />
    </>
  )
}

Seo.defaultProps = {
  title: '',
  description: '',
  image: '',
  pathname: '',
  article: '',
}

export default Seo
