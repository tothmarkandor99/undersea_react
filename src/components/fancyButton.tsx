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

interface FancyButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  title: string
  active?: boolean
}

const FancyButton = ({onPress, title, active = false}: FancyButtonProps) => {
  if (active && onPress !== undefined) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
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
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>{title}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  loginButton: {
    backgroundColor: '#A0D0F6',
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

export default FancyButton
