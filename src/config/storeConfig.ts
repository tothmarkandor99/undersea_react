import createSagaMiddleware from '@redux-saga/core'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appRootReducer} from '../../store'
import {createLogger} from 'redux-logger'
import {rootSaga} from '../../saga'
import {Config} from '../constants/config'

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const deepRootReducer = combineReducers({app: appRootReducer})
  let store: any
  if (Config.loggingRedux) {
    const logger = createLogger({
      level: 'info',
    })
    store = createStore(
      deepRootReducer,
      applyMiddleware(sagaMiddleware, loggerMiddleware),
    )
  } else {
    store = createStore(deepRootReducer, applyMiddleware(sagaMiddleware))
  }
  sagaMiddleware.run(rootSaga)
  return store
}

function loggerMiddleware(store: any) {
  return function (next: (arg0: {type: any}) => any) {
    return function (action: {type: any}) {
      console.log(action.type)
      return next(action)
    }
  }
}
