// Keep this top v
import 'react-native-gesture-handler'
// Keep this top ^

import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//Screen imports
import LoginScreen from './src/screens/loginScreen'
import RegisterScreen from './src/screens/registerScreen'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
