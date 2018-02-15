import React, { Component } from 'react'
//import { connect } from 'react-redux'
import './App.css'

//components
import Search from '../Search/Search'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Truth-check</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App
