import React, {useState} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  TabView,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view'
import BuildingsScreen from './buildingsScreen'
import UpgradesScreen from './upgradesScreen'
import ArmyScreen from './armyScreen'
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native'
import {Colors} from '../constants/colors'
import {Fonts} from '../constants/fonts'
import {Spaces} from '../constants/spaces'

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

  const renderScene = (
    props: SceneRendererProps & {
      route: {
        key: string
        title: string
      }
    },
  ) => {
    switch (props.route.key) {
      case 'buildings':
        return <BuildingsScreen navigation={navigation} />
      case 'upgrades':
        return <UpgradesScreen navigation={navigation} />
      case 'army':
        return <ArmyScreen navigation={navigation} />
      default:
        return null
    }
  }

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<{
        key: string
        title: string
      }>
    },
  ) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, index) => {
          const selected = props.navigationState.index === index

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabItem}
              onPress={() => setIndex(index)}>
              <Text
                style={[styles.tabText, selected && {borderBottomWidth: 2}]}>
                {route.title}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const initialLayout = {width: Dimensions.get('window').width}

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundDarkBlue,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  tabText: {
    color: Colors.white,
    fontFamily: Fonts.openSansBold,
    borderColor: Colors.logoBlue,
    paddingHorizontal: Spaces.small,
    paddingVertical: Spaces.small,
  },
})
