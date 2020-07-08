// Keep this top v
import 'react-native-gesture-handler'
// Keep this top ^

// Package imports
import React, {useState, useEffect} from 'react'
import {StyleSheet} from 'react-native'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {Provider} from 'react-redux'
import {configureStore} from './src/config/storeConfig'
import Navi from './src/navigation/navigation'

// Resources
let customFonts = {
  Baloo: require('./assets/fonts/Baloo-Regular.ttf'),
}

export default function App() {
  const store = configureStore()

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
      <Provider store={store}>
        <Navi />
      </Provider>
    )
  } else {
    return <AppLoading />
  }
}

const styles = StyleSheet.create({})
