import React from 'react'

import { Provider as ModalBackgroundProvider } from 'use-react-modal'

import { ThemeProvider, Global as GlobalStyles, css } from '@emotion/react'
import theme from './themes/theme'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import ArticlePage from './components/ArticlePage/ArticlePage'

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${theme.colors.text};
    background: ${theme.colors.background};
    font-family: ${theme.fonts.body};
  }
`

function App() {
  return (
    <>
      <GlobalStyles styles={styles} />
      <ModalBackgroundProvider background="rgba(0, 0, 0, 0.5)">
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/:id">
                <ArticlePage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </ModalBackgroundProvider>
    </>
  )
}

export default App
