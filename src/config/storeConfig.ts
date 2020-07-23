import createSagaMiddleware from '@redux-saga/core'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appRootReducer} from '../../store'
import {createLogger} from 'redux-logger'
import {rootSaga} from '../../saga'
import {Config} from '../constants/config'
import * as signalR from '@microsoft/signalr'
import {getStats} from '../store/stats/stats.actions'
import {getArmy} from '../store/army/army.actions'
import {getBuildings} from '../store/building/building.actions'
import {getFights} from '../store/fight/fight.actions'
import {getUpgrades} from '../store/upgrade/upgrade.actions'

const connection = new signalR.HubConnectionBuilder()
  .configureLogging(Config.signalRLogLevel)
  .withUrl('http://underseat2lasttry.webtest.encosoft.internal/api/newround')
  .build()

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const deepRootReducer = combineReducers({app: appRootReducer})
  let store: any
  if (Config.loggingRedux === 'full') {
    const logger = createLogger({})
    store = createStore(
      deepRootReducer,
      applyMiddleware(sagaMiddleware, logger),
    )
  } else if (Config.loggingRedux === 'names') {
    store = createStore(
      deepRootReducer,
      applyMiddleware(sagaMiddleware, loggerMiddleware),
    )
  } else {
    store = createStore(deepRootReducer, applyMiddleware(sagaMiddleware))
  }
  sagaMiddleware.run(rootSaga)
  setupSignalRReceiver(store)

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

const startSignalRConnection = (connection: signalR.HubConnection) =>
  connection
    .start()
    .then(() => console.info('SignalR Connected'))
    .catch(err => console.error('SignalR Connection Error: ', err))

function setupSignalRReceiver(store: any) {
  console.log('Connection state:', connection.state)
  if (connection.state === signalR.HubConnectionState.Disconnected) {
    connection.on('newround', () => {
      console.log('SignalR message received')
      store.dispatch(getStats())
      store.dispatch(getArmy())
      store.dispatch(getBuildings())
      store.dispatch(getFights())
      store.dispatch(getUpgrades())
    })

    connection.onclose(() =>
      setTimeout(startSignalRConnection(connection), 5000),
    )

    startSignalRConnection(connection)
  }
}
