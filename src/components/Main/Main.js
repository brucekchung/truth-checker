import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Result from '../Result/Result'

export const Main = () => (
  <Switch>
    <Route exact path='/' component={Result} />
  </Switch>
)