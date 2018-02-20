import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export const Nav = () => (
  <div className='Nav'>
    <NavLink to='/'>About</NavLink>
    <NavLink to='/Methods'>Methods</NavLink>
    <NavLink to='/Result'>Result</NavLink>
  </div>
)