import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import AskView from '../views/AskView'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import NotFound from '../views/NotFound'
import UserView from '../views/UserView'

export default () => (
  <Router>
    <AppHeader />
    <Switch>
      <Redirect exact path="/" to="/jobs" component={JobsView} />
      <Route path="/news" component={NewsView} />
      <Route path="/ask" component={AskView} />
      <Route path="/jobs" component={JobsView} />
      <Route path="/user/:username" component={UserView} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
)
