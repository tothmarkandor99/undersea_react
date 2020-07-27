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
import {getAttackUnits} from '../store/attack/attack.actions'

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const deepRootReducer = combineReducers({app: appRootReducer})
  let store: any
  if (Config.loggingRedux === 'full') {
    const logger = createLogger({})
    store = createStore(
      deepRootReducer,
      applyMiddleware(sagaMiddleware, createSignalRMiddleware(), logger),
    )
  } else if (Config.loggingRedux === 'names') {
    store = createStore(
      deepRootReducer,
      applyMiddleware(
        sagaMiddleware,
        createSignalRMiddleware(),
        loggerMiddleware,
      ),
    )
  } else {
    store = createStore(
      deepRootReducer,
      applyMiddleware(sagaMiddleware, createSignalRMiddleware()),
    )
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

const createSignalRMiddleware = () => {
  return store => {
    let connection = new signalR.HubConnectionBuilder()
      .configureLogging(Config.signalRLogLevel)
      .withUrl(Config.signalRUrl)
      .build()

    connection.on('newround', message => {
      if (Config.loggingSignalR) {
        console.log('SignalR message received')
      }
      store.dispatch(getStats())
      store.dispatch(getArmy())
      store.dispatch(getBuildings())
      store.dispatch(getFights())
      store.dispatch(getUpgrades())
      store.dispatch(getAttackUnits())
    })

    connection.onclose(() => {
      if (Config.loggingSignalR) {
        console.log('SignalR connection closed. Reconnecting ...')
      }
      return setTimeout(startSignalRConnection(connection), 5000)
    })

    startSignalRConnection(connection)

    return next => action => {
      return next(action)
    }
  }
}

const startSignalRConnection = (connection: signalR.HubConnection) =>
  connection
    .start()
    .then(() => {
      if (Config.loggingSignalR) {
        console.info('SignalR Connected')
      }
    })
    .catch(err => {
      if (Config.loggingSignalR) {
        console.error('SignalR Connection Error: ', JSON.stringify(err))
      }
    })
