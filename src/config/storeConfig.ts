import {combineReducers, createStore} from 'redux'
import {appRootReducer} from '../../store'

export function configureStore() {
  const deepRootReducer = combineReducers({app: appRootReducer})
  const store = createStore(deepRootReducer)
  return store
}
