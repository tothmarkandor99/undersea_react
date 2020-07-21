import React, {useState} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {TabView, SceneMap} from 'react-native-tab-view'
import BuildingsModal from './buildingsModal'
import ArmyModal from './armyModal'
import UpgradesModal from './upgradesModal'
import {Dimensions} from 'react-native'

interface CityModalProps {
  navigation: StackNavigationProp<any>
}

export default function CityScreen({navigation}: CityModalProps) {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
  ])

  const renderScene = SceneMap({
    /*first: BuildingsModal({navigation}),
    third: UpgradesModal({navigation}),
    second: ArmyModal({navigation}),*/
  })

  const initialLayout = {width: Dimensions.get('window').width}

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  )
}
