import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProp {
  title?: string
  description?: string
  image?: string
}

const SEO: FC<SEOProp> = ({ title, description, image }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const metaTitle = title || siteMetadata.title
  const metaDescription = description
  const metaImage = image

  return (
    <Helmet
      title={metaTitle}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: metaTitle },
        { property: 'og:description', content: metaDescription },
        { property: 'og:image', content: metaImage },
      ]}
    />
  )
}

export default SEO
