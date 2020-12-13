import React, { FC } from 'react'
import { Navbar, Footer } from './'

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-screen min-h-screen pb-20">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
