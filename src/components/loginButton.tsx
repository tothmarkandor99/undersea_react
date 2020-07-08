import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Spaces} from '../constants/spaces'

interface LoginButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined
  title: string
  style: StyleProp<ViewStyle>
}

const LoginButton = ({onPress, title, style}: LoginButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.row}>
        <LinearGradient
          colors={['#9FFFF0', '#6BEEE9', '#0FCFDE']}
          start={[1, 0.3]}
          end={[0, 0.7]}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>{title}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 1000,
    shadowColor: '#3B7DBD',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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

export default LoginButton
