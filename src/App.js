import React, { Component } from 'react'
import Route from './routes/index'
import './css/common.scss'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Route />
      </div>
    )
  }
}

export default App
