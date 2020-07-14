import React from 'react'
import LoginScreen from '../../src/screens/loginScreen'
import RegisterScreen from '../../src/screens/registerScreen'
import GameScreen from '../../src/screens/gameScreen'
import ProfileModal from '../../src/screens/profileModal'
import HighscoreModal from '../../src/screens/highscoreModal'
import BuildingsModal from '../screens/buildingsModal'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import ArmyModal from '../screens/armyModal'
import FightModal from '../screens/fightModal'
import UpgradesModal from '../screens/upgradesModal'
import AttackTargetModal from '../screens/attackTargetModal'
import AttackUnitsModal from '../screens/attackUnitsModal'

export default function Navi() {
  const LoginStack = createStackNavigator()
  const GameStack = createStackNavigator()
  const AttackStack = createStackNavigator()

  const loggedIn = useSelector(
    (state: IApplicationState) => state.app.user.user !== undefined,
  )

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
            <LoginStack.Screen name="ModalStack" component={ModalStackScreen} />
          </>
        )}
      </LoginStack.Navigator>
    </NavigationContainer>
  )

  function ModalStackScreen() {
    return (
      <GameStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {backgroundColor: 'black'},
          cardStyleInterpolator: ({current, next, layouts}) => {
            return {
              cardStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
                transform: [
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 1.3],
                        })
                      : 1,
                  },
                  {
                    scale: current
                      ? current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.3, 1],
                        })
                      : 1,
                  },
                ],
              },
            }
          },
        }}
        initialRouteName="GameScreen"
        mode="modal">
        <GameStack.Screen name="GameScreen" component={GameScreen} />
        <GameStack.Screen name="ProfileModal" component={ProfileModal} />
        <GameStack.Screen name="HighscoreModal" component={HighscoreModal} />
        <GameStack.Screen name="BuildingsModal" component={BuildingsModal} />
        <GameStack.Screen name="ArmyModal" component={ArmyModal} />
        <GameStack.Screen name="FightModal" component={FightModal} />
        <GameStack.Screen name="UpgradesModal" component={UpgradesModal} />
        <GameStack.Screen name="AttackStack" component={AttackStackScreen} />
      </GameStack.Navigator>
    )
  }

  function AttackStackScreen() {
    return (
      <AttackStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
          cardStyleInterpolator: ({current, next, layouts}) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                  {
                    translateX: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -layouts.screen.width],
                        })
                      : 0,
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            }
          },
        }}
        mode="modal">
        <AttackStack.Screen
          name="AttackTargetModal"
          component={AttackTargetModal}
        />
        <AttackStack.Screen
          name="AttackUnitsModal"
          component={AttackUnitsModal}
        />
      </AttackStack.Navigator>
    )
  }
}
