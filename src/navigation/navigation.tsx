import React from 'react'
import LoginScreen from '../../src/screens/loginScreen'
import RegisterScreen from '../../src/screens/registerScreen'
import GameScreen from '../../src/screens/gameScreen'
import ProfileModal from '../../src/screens/profileModal'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'

export default function Navi() {
  const LoginStack = createStackNavigator()
  const ModalStack = createStackNavigator()

  const loggedIn = useSelector(
    (state: IApplicationState) => state.app.user.loggedIn,
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
      <ModalStack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 0.25, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
        mode="modal">
        <ModalStack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{headerShown: false}}
        />
        <ModalStack.Screen name="ProfileModal" component={ProfileModal} />
      </ModalStack.Navigator>
    )
  }
}
