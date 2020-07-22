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
import {Fonts} from './src/constants/fonts'
import FlashMessage from 'react-native-flash-message'
import AdminButton from './src/components/adminButton'

// Resources
let customFonts = {
  [Fonts.baloo]: require('./assets/fonts/Baloo-Regular.ttf'),
  [Fonts.openSansRegular]: require('./assets/fonts/OpenSans-Regular.ttf'),
  [Fonts.openSansBold]: require('./assets/fonts/OpenSans-Bold.ttf'),
}

export default function App() {
  const store = configureStore()

  const [fontsLoaded, setfontsLoaded] = useState(false)
  const loadFonts = async () => {
    return Font.loadAsync(customFonts)
  }

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Navi />
        <AdminButton />
        <FlashMessage duration={3000} />
      </Provider>
    )
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          setfontsLoaded(true)
        }}
        onError={() => {
          console.warn('Failed to load fonts')
        }}
      />
    )
  }
}

const styles = StyleSheet.create({})
