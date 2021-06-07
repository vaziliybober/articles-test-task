import React from 'react'

import { ThemeProvider } from 'theme-ui'
import theme from './themes/theme'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import ArticlePage from './components/ArticlePage/ArticlePage'

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
