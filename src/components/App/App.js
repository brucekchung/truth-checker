import React, { Component } from 'react'
import './App.css'

//components
import { Main } from '../Main/Main'
import { Nav } from '../Nav/Nav'
//download autofomatter

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Truth-check</h1>
        </header>
        <Nav />
        <Main />
      </div>
    )
  }
}

export default App