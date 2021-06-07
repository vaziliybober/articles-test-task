import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import HomePage from './components/HomePage'
import ArticlePage from './components/ArticlePage'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/article/:id">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/article/:id">
            <ArticlePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
