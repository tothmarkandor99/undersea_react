import React, {useState} from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  View,
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Spaces} from '../constants/spaces'
import {Colors} from '../constants/colors'
import {RFValue} from 'react-native-responsive-fontsize'
import {Fonts} from '../constants/fonts'

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
      style={[styles.container, {borderRadius: cornerRadius / 2}]}
      disabled={!(active && onPress !== undefined)}>
      {active ? (
        <LinearGradient
          colors={[
            Colors.buttonGradient1,
            Colors.buttonGradient2,
            Colors.buttonGradient3,
          ]}
          start={[1, 0.3]}
          end={[0, 0.7]}
          locations={[0, 0.5, 1]}
          style={[styles.loginButton, {borderRadius: cornerRadius / 2}]}
          onLayout={event => {
            setCornerRadius(event.nativeEvent.layout.height)
          }}>
          <Text style={styles.loginButtonText}>{title}</Text>
        </LinearGradient>
      ) : (
        <View
          style={[styles.loginButton, {borderRadius: cornerRadius / 2}]}
          onLayout={event => {
            setCornerRadius(event.nativeEvent.layout.height)
          }}>
          <Text style={styles.loginButtonText}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    elevation: 5,
    shadowColor: Colors.shadowBlue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loginButton: {
    backgroundColor: Colors.inactiveBlue,
    paddingVertical: Spaces.normal,
  },
  loginButtonText: {
    textAlign: 'center',
    fontFamily: Fonts.baloo,
    color: Colors.darkBlue,
    fontSize: RFValue(16, 568),
  },
})

export default FancyButton
