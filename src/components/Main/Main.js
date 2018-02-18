import React from 'react'
import { Route } from 'react-router-dom'

//components:
import { Methods } from '../Methods/Methods'
import { About } from '../About/About'
import Result from '../Result/Result'
import Search from '../Search/Search'

export const Main = () => (
  <div>
    <Route path='/' component={ Search } />
    <Route exact path='/' component={ About } />
    <Route exact path='/result' component={ Result } />
    <Route exact path='/methods' component={ Methods } />
  </div>
)