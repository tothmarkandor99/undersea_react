import React from 'react'
import LoginScreen from '../../src/screens/loginScreen'
import RegisterScreen from '../../src/screens/registerScreen'
import GameScreen from '../../src/screens/gameScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'

export default function Navi() {
  const Stack = createStackNavigator()
  const loggedIn = useSelector(
    (state: IApplicationState) => state.app.user.loggedIn,
  )

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {!loggedIn ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Game" component={GameScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
