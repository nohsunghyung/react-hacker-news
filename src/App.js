import React, { Component } from 'react'
import AskView from './components/AskView'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: 'ff'
    }
  }
  
  render() {
    return (
      <div className="app">
        <AskView></AskView>
      </div>
    )
  }
}

export default App
