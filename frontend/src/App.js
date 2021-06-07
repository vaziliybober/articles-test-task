import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import ArticlePage from './components/ArticlePage/ArticlePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article/:id">
          <ArticlePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
