import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer: FC = () => {
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

  return (
    <div className="w-screen h-32 bg-gray-900 text-white flex flex-col justify-center items-center">
      <div>
  <h1 className="text-xl font-bold">&copy; {`2020 ${siteMetadata.title}`}</h1>
      </div>
    </div>
  )
}

export default Footer
