import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components:
import { Methods } from '../Methods/Methods'
import { About } from '../About/About'
import Result from '../../containers/Result/Result'

export const Main = () => (
  <Switch>
    <Route exact path='/' component={ About } />
    <Route exact path='/result' component={ Result } />
    <Route exact path='/methods' component={ Methods } />
  </Switch>
)