import React, { Component } from 'react'
import Route from './routes/index'

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
        <Route />
      </div>
    )
  }
}

export default App
