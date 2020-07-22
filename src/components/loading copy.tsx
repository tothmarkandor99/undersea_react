import React from 'react'
import {
  Dimensions,
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

const {height, width} = Dimensions.get('window')
const SIZE = 36

export default function Loading(props: ActivityIndicatorProps) {
  return (
    <ActivityIndicator
      {...props}
      size="large"
      color={Colors.mediumDarkBlue}
      style={styles.indicator}
    />
  )
}

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    top: height / 2 - SIZE / 2,
    left: width / 2 - SIZE / 2,
  },
})
