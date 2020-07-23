import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as signalR from '@microsoft/signalr'
import {View} from 'react-native'
import {getStats} from '../store/stats/stats.actions'
import {getArmy} from '../store/army/army.actions'
import {getBuildings} from '../store/building/building.actions'
import {getFights} from '../store/fight/fight.actions'
import {getHighscores} from '../store/highscore/highscore.actions'
import {SearchRequest} from '../model/search/search.request'
import {getUpgrades} from '../store/upgrade/upgrade.actions'
import {IApplicationState} from '../../store'
import {Config} from '../constants/config'

export default function SignalRService() {
  const {search} = useSelector(
    (state: IApplicationState) => state.app.highscore,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    let connection = new signalR.HubConnectionBuilder()
      .configureLogging(Config.signalRLogLevel)
      .withUrl(
        'http://underseat2lasttry.webtest.encosoft.internal/api/newround',
      )
      .build()

    connection.on('newround', () => {
      console.log('SignalR message received. Setting timeout')
      setTimeout(() => {
        console.log('Updating models')
        dispatch(getStats())
        dispatch(getArmy())
        dispatch(getBuildings())
        dispatch(getFights())
        dispatch(getHighscores(search as SearchRequest))
        dispatch(getUpgrades())
      }, 15000)
    })

    connection.start().then(() => {
      console.log('SignalR connection state:', connection.state)
    })
  }, [dispatch])

  return <View style={{display: 'none'}}></View>
}
