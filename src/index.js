import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import AsyncApp from './containers/AsyncApp'
import registerServiceWorker from './registerServiceWorker';

import { fetchCheck } from './actions'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)


render(
  <Provider store={store}>
    <AsyncApp />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();

store.dispatch(fetchCheck({ lilypond: '', shortscore: '' }))
