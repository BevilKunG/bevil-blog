import React, { FC } from 'react'
import { Link } from 'gatsby'

const Navbar: FC = () => {
  return (
    <div className="w-screen h-16 bg-gray-900 flex flex-row justify-start items-center px-8">
      <h1>
        <Link
          to="/"
          className="text-3xl text-white font-bold hover:no-underline"
        >
          Bevil Blog
        </Link>
      </h1>
    </div>
  )
}

export default Navbar
