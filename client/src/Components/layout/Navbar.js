import React from 'react'
import {Link} from 'react-router-dom'
import InsideLinks from './InsideLinks'
import OutsideLinks from './OutsideLinks'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Plan Maker</Link>
        <OutsideLinks />
        <InsideLinks />
        </div>
    </nav>
  )
}

export default Navbar