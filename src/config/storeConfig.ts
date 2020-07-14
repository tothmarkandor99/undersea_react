import createSagaMiddleware from '@redux-saga/core'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appRootReducer} from '../../store'
import logger from 'redux-logger'
import {rootSaga} from '../../saga'

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const deepRootReducer = combineReducers({app: appRootReducer})

  const store = createStore(
    deepRootReducer,
    applyMiddleware(/*logger,*/ sagaMiddleware),
  )
  sagaMiddleware.run(rootSaga)
  return store
}
