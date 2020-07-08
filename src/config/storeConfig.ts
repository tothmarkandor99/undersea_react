import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appRootReducer} from '../../store'
import logger from 'redux-logger'

export function configureStore() {
  const deepRootReducer = combineReducers({app: appRootReducer})
  const store = createStore(deepRootReducer, applyMiddleware(logger))
  return store
}
