import React from 'react'
import { Route } from 'react-router-dom'

//components:
import { Methods } from '../Methods/Methods'
import { About } from '../About/About'
import { Example } from '../Example/Example'
import Result from '../../containers/Result/Result'
import Search from '../../containers/Search/Search'

export const Main = () => (
  <div>
    <Route path='/' component={ Search } />
    <Route exact path='/' component={ About } />
    <Route exact path ='/example' component={ Example } />
    <Route exact path='/result' component={ Result } />
    <Route exact path='/methods' component={ Methods } />
  </div>
)