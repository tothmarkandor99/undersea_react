// Keep this top v
import 'react-native-gesture-handler'
// Keep this top ^

import React, {useState, useEffect} from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

// Screen imports
import LoginScreen from './src/screens/loginScreen'
import RegisterScreen from './src/screens/registerScreen'
import GameScreen from './src/screens/gameScreen'

// Resources
let customFonts = {
  Baloo: require('./assets/fonts/Baloo-Regular.ttf'),
}

export default function App() {
  const Stack = createStackNavigator()

  const [fontsLoaded, setfontsLoaded] = useState(false)
  const loadFonts = () => {
    Font.loadAsync(customFonts).then(() => {
      setfontsLoaded(true)
    })
  }

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    loadFonts()
    return () => {}
  }, [])

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {loggedIn ? (
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
  } else {
    return <AppLoading />
  }
}

const styles = StyleSheet.create({})
