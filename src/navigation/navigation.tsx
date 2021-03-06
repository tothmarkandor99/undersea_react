import React from 'react'
import LoginScreen from '../../src/screens/loginScreen'
import RegisterScreen from '../../src/screens/registerScreen'
import GameScreen from '../../src/screens/gameScreen'
import ProfileModal from '../../src/screens/profileModal'
import HighscoreModal from '../../src/screens/highscoreModal'
import {Image, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import FightScreen from '../screens/fightScreen'
import AttackTargetScreen from '../screens/attackTargetScreen'
import AttackUnitsScreen from '../screens/attackUnitsScreen'
import CityScreen from '../screens/cityScreen'
import GameFooter from '../components/gameFooter'
import {Colors} from '../constants/colors'
import {Fonts} from '../constants/fonts'
import {RFValue} from 'react-native-responsive-fontsize'
import {Spaces} from '../constants/spaces'
import {Strings} from '../constants/strings'

export default function Navi() {
  const LoginStack = createStackNavigator()
  const ModalStack = createStackNavigator()
  const BottomTabStack = createBottomTabNavigator()
  const AttackStack = createStackNavigator()
  const CityStack = createStackNavigator()
  const FightStack = createStackNavigator()

  const loggedIn = useSelector(
    (state: IApplicationState) => state.app.user.loggedIn,
  )

  const headerOptions: StackNavigationOptions = {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerText,
    headerTintColor: Colors.white,
  }

  const AttackStackScreen = () => {
    return (
      <AttackStack.Navigator>
        <AttackStack.Screen
          name="AttackTargetScreen"
          component={AttackTargetScreen}
          options={{...headerOptions, title: Strings.attack}}
        />
        <AttackStack.Screen
          name="AttackUnitsScreen"
          component={AttackUnitsScreen}
          options={{...headerOptions, title: Strings.attack}}
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
          options={{...headerOptions, title: Strings.city}}
        />
      </CityStack.Navigator>
    )
  }

  const FightStackScreen = () => {
    return (
      <FightStack.Navigator>
        <FightStack.Screen
          name="FightScreen"
          component={FightScreen}
          options={{...headerOptions, title: Strings.myUnits}}
        />
      </FightStack.Navigator>
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
            title: Strings.home,
          }}
        />
        <BottomTabStack.Screen
          name="CityStackScreen"
          component={CityStackScreen}
          options={{
            tabBarIcon: () => (
              <Image source={require('../../assets/img/footer/tab_city.png')} />
            ),
            title: Strings.city,
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
            title: Strings.attack,
          }}
        />
        <BottomTabStack.Screen
          name="FightStackScreen"
          component={FightStackScreen}
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
        <ModalStack.Screen
          name="HighscoreModal"
          component={HighscoreModal}
          options={{...headerOptions, title: Strings.scoreboard}}
        />
        <ModalStack.Screen
          name="ProfileModal"
          component={ProfileModal}
          options={{...headerOptions, title: Strings.profile}}
        />
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.mediumDarkBlue,
  },
  headerText: {
    fontFamily: Fonts.openSansBold,
    fontSize: RFValue(15, 568),
    marginLeft: Spaces.normal,
  },
})
