import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Stopwatch from './containers/stopwatch'

const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Stopwatch />
  </Provider>,
  rootElement)
