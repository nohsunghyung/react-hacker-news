import React from 'react'
import { NavLink } from 'react-router-dom'

const AppHeader = () => {
  return (
    <header>
      <ul className="header">
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/ask">Ask</NavLink></li>
      </ul>
    </header>
  )
}

export default AppHeader;