"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false)
  const showNavhandler = () => setShowNav(true)
  const closeNavhandler = () => setShowNav(false)

  return (
    <div>
        <Navbar openNav={showNavhandler} />
        <MobileNav nav={showNav} closeNav={closeNavhandler}/>
    </div>
  )
}

export default ResponsiveNav