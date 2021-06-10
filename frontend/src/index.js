import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as ModalBackgroundProvider } from 'use-react-modal'
import { ThemeProvider, Global as GlobalStyles, css } from '@emotion/react'

import reducer from './slices'
import saga from './sagas'
import theme from './themes/theme'
import App from './App'
import './styles.css'

const globalStyles = css`
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

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})
sagaMiddleware.run(saga)

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ModalBackgroundProvider background="rgba(0, 0, 0, 0.5)">
          <>
            <GlobalStyles styles={globalStyles} />
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </>
        </ModalBackgroundProvider>
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
