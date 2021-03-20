import React from "react"

import { Link } from 'gatsby'

import logo from '../assets/logos/PDAG LOGO.png'

const Navbar = () => {
  return(
    <div>
      <nav className='navbar' role='navigation' aria-label='main-navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
              <img src={logo} height='800' alt=""/>
            </a>
          </div>
          {/* <!--The Hamburger will go here --> */}
          <div className='navbar-menu'>
            <div className='navbar-end'>
              <Link className='navbar-item' to='/'>HOME</Link>
              <Link className='navbar-item' to='/who-we-are'>WHO WE ARE</Link>
              <Link className='navbar-item' to='/our-work'>OUR WORK</Link>
              <Link className='navbar-item' to='/our-reflections'>OUR REFLECTIONS</Link>
              <Link className='navbar-item' to='/contact-us'>CONTACT US</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar