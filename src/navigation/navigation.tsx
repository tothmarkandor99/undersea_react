import React from 'react'
import LoginScreen from '../../src/screens/loginScreen'
import RegisterScreen from '../../src/screens/registerScreen'
import GameScreen from '../../src/screens/gameScreen'
import ProfileModal from '../../src/screens/profileModal'
import HighscoreModal from '../../src/screens/highscoreModal'
import BuildingsModal from '../screens/buildingsModal'
import {Image, TouchableOpacity, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import ArmyModal from '../screens/armyModal'
import FightScreen from '../screens/fightScreen'
import UpgradesModal from '../screens/upgradesModal'
import AttackTargetScreen from '../screens/attackTargetScreen'
import AttackUnitsScreen from '../screens/attackUnitsScreen'
import CityScreen from '../screens/cityScreen'
import {attackSaga} from '../store/attack/attack.saga'
import {LinearGradient} from 'expo'
import GameFooter from '../components/gameFooter'

export default function Navi() {
  const LoginStack = createStackNavigator()
  const ModalStack = createStackNavigator()
  const BottomTabStack = createBottomTabNavigator()
  const AttackStack = createStackNavigator()
  const CityStack = createStackNavigator()

  const loggedIn = useSelector(
    (state: IApplicationState) => state.app.user.loggedIn,
  )

  const AttackStackScreen = () => {
    return (
      <AttackStack.Navigator>
        <AttackStack.Screen
          name="AttackTargetScreen"
          component={AttackTargetScreen}
        />
        <AttackStack.Screen
          name="AttackUnitsScreen"
          component={AttackUnitsScreen}
        />
      </AttackStack.Navigator>
    )
  }

  const CityStackScreen = () => {
    return (
      <CityStack.Navigator>
        <CityStack.Screen
          name="CityScreen"
          component={CityScreen}
          options={{title: 'Városom'}}
        />
      </CityStack.Navigator>
    )
  }

  const BottomTabStackScreen = () => {
    return (
      <BottomTabStack.Navigator tabBar={GameFooter}>
        <BottomTabStack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            tabBarIcon: () => (
              <Image source={require('../../assets/img/footer/tab_home.png')} />
            ),
            title: 'Kezdőlap',
          }}
        />
        <BottomTabStack.Screen
          name="CityStackScreen"
          component={CityStackScreen}
          options={{
            tabBarIcon: () => (
              <Image source={require('../../assets/img/footer/tab_city.png')} />
            ),
            title: 'Városom',
          }}
        />
        <BottomTabStack.Screen
          name="AttackStackScreen"
          component={AttackStackScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/img/footer/tab_attack.png')}
              />
            ),
            title: 'Támadás',
          }}
        />
        <BottomTabStack.Screen
          name="FightScreen"
          component={FightScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/img/footer/tab_units.png')}
              />
            ),
            title: 'Csapataim',
          }}
        />
      </BottomTabStack.Navigator>
    )
  }

  const ModalStackScreen = () => {
    return (
      <ModalStack.Navigator>
        <ModalStack.Screen
          name="BottomTabStackScreen"
          component={BottomTabStackScreen}
          options={{headerShown: false}}
        />
        <ModalStack.Screen name="HighscoreModal" component={HighscoreModal} />
        <ModalStack.Screen name="ProfileModal" component={ProfileModal} />
      </ModalStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <LoginStack.Navigator headerMode="none">
        {!loggedIn ? (
          <>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />
          </>
        ) : (
          <>
            <LoginStack.Screen
              name="ModalStackScreen"
              component={ModalStackScreen}
            />
          </>
        )}
      </LoginStack.Navigator>
    </NavigationContainer>
  )
}
