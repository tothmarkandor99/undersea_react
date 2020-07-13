import React, {useState} from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  View,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Spaces} from '../constants/spaces'

interface FancyButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  title: string
  active?: boolean
}

const FancyButton = ({onPress, title, active = false}: FancyButtonProps) => {
  const [cornerRadius, setCornerRadius] = useState(15)

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={!(active && onPress !== undefined)}>
      <View style={styles.row}>
        <LinearGradient
          colors={['#9FFFF0', '#6BEEE9', '#0FCFDE']}
          start={[1, 0.3]}
          end={[0, 0.7]}
          locations={[0, 0.5, 1]}
          style={[styles.loginButton, {borderRadius: cornerRadius / 2}]}
          onLayout={event => {
            setCornerRadius(event.nativeEvent.layout.height)
          }}>
          <Text style={styles.loginButtonText}>{title}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    shadowColor: '#3B7DBD',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButton: {
    backgroundColor: '#A0D0F6',
    flex: 1,
    paddingVertical: Spaces.normal,
  },
  loginButtonText: {
    textAlign: 'center',
    fontFamily: 'Baloo',
    color: '#1C3E76',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default FancyButton
