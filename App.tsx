// Keep this top v
import 'react-native-gesture-handler'
// Keep this top ^

import {StatusBar} from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

// Screen imports
import LoginScreen from './src/screens/loginScreen'
import RegisterScreen from './src/screens/registerScreen'

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

  useEffect(() => {
    loadFonts()
    return () => {}
  }, [])

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return <AppLoading />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
