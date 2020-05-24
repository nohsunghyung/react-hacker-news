import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import Home from '../views/Home'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import NotFound from '../views/NotFound'
import UserView from '../views/UserView'

export default () => (
  <Router>
    <AppHeader />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ask" component={AskView} />
      <Route path="/jobs" component={JobsView} />
      <Route path="/user/:username" component={UserView} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
)
