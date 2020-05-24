import React from 'react'
import { NavLink } from 'react-router-dom'

const AppHeader = () => {
  return (
    <header>
      <ul>
        <li><NavLink exact to="/" activeClassName="activeClass">Home</NavLink></li>
        <li><NavLink to="/jobs" activeClassName="ff">jobs</NavLink></li>
        <li><NavLink to="/ask" activeClassName="ff">ask</NavLink></li>
      </ul>
    </header>
  )
}

export default AppHeader;