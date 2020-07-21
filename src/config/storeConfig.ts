import createSagaMiddleware from '@redux-saga/core'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appRootReducer} from '../../store'
import logger from 'redux-logger'
import {rootSaga} from '../../saga'
import {Config} from '../constants/config'

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const deepRootReducer = combineReducers({app: appRootReducer})

  let store: any
  if (Config.loggingRedux) {
    store = createStore(
      deepRootReducer,
      applyMiddleware(logger, sagaMiddleware),
    )
  } else {
    store = createStore(deepRootReducer, applyMiddleware(sagaMiddleware))
  }
  sagaMiddleware.run(rootSaga)
  return store
}
