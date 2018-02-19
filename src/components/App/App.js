import React, { Component } from 'react'
//import { connect } from 'react-redux'
//import { authorization } from '../../watson-interface/authorize'
import { getToken } from '../../api'
import './App.css'

//components
import { Main } from '../Main/Main'
import { Nav } from '../Nav/Nav'
//download autofomatter

export class App extends Component {

  componentDidMount = async () => {
    console.log('hello')
    const stuff = await getToken()
    console.log('sstuff: ', stuff)
    // authorization.getToken({
    //   url: 'https://stream.watsonplatform.net/text-to-speech/api'
    // },
    // (err, token) => {
    //   if (!token) {
    //     console.log('error:', err)
    //   } else {
    //     console.log(token)
    //   } 
    // })
  }

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