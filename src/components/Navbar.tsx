import React, { FC } from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const Navbar: FC = () => {
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
    <div className="sticky top-0 z-10 w-screen h-10 bg-gray-900 flex flex-row justify-start items-center px-8">
      <h1>
        <Link
          to="/"
          className="text-xl text-white font-bold hover:no-underline"
        >
          {siteMetadata.title}
        </Link>
      </h1>
    </div>
  )
}

export default Navbar
