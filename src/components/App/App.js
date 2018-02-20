import React, { Component } from 'react'
//import { getToneAnalysis } from '../../api'
import './App.css'

//components
import { Main } from '../Main/Main'
import { Nav } from '../Nav/Nav'
//download autofomatter

export class App extends Component {

  componentDidMount = async () => {
    // const text = 'If time travelers from 1968 found themselves in an airport today, there might be plenty of changes that surprise them. But the planes would look reassuringly familiar. While there have been vast improvements in materials, engines and avionics -- helping 2017 become the safest year in aviation history -- commercial aircraft remain structurally similar to those of the 1960s. In fact, the Boeing 737, one of the best-selling airliners ever in its many successive versions, flew for the first time in 1967. But what might air travel look like 50 years from now? Over the years, there have been some attempts to change the aircraft design paradigm. The 1970s promised a future of supersonic travel that never really took hold, apart from the limited flights of the Concorde and its Soviet equivalent, the Tu-144. And, the idea of a blended wing airliner, resembling the stealth Northrop B-2 bomber, has sometimes been touted -- but without much success so far. A combination of technical and financial reasons has led the aviation industry to discard these rather outlandish propositions and focus on the more canonical designs that are the norm today. Will the next 50 years continue along the slow, steady path of the last half-century?'

    // const stuff = await getToneAnalysis(text)
    // console.log('sstuff: ', stuff)

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