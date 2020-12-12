import React, { FC } from 'react'
import { Navbar } from './'
// import '../styles/app.css'

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen">{children}</div>
    </div>
  )
}

export default Layout
