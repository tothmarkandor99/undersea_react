import React, {useState} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {TabView, SceneMap} from 'react-native-tab-view'
import BuildingsModal from './buildingsModal'
import UpgradesModal from './upgradesModal'
import ArmyModal from './armyModal'
import {Dimensions} from 'react-native'

interface CityModalProps {
  navigation: StackNavigationProp<any>
}

export default function CityScreen({navigation}: CityModalProps) {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {key: 'buildings', title: 'Épületek'},
    {key: 'upgrades', title: 'Fejlesztések'},
    {key: 'army', title: 'Sereg'},
  ])

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'buildings':
        return <BuildingsModal navigation={navigation} />
      case 'upgrades':
        return <UpgradesModal navigation={navigation} />
      case 'army':
        return <ArmyModal navigation={navigation} />
      default:
        return null
    }
  }

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
