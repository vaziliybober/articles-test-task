import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import reducer from './slices'
import mySaga from './sagas'

import App from './App'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
