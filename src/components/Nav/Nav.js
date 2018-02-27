import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export const Nav = () => (
  <div className='Navi'>
    <NavLink className="Nav" exact to='/'>About</NavLink>
    <NavLink className="Nav" to='/Methods'>Methods</NavLink>
    <NavLink className="Nav" to='/Result'>Result</NavLink>
  </div>
)