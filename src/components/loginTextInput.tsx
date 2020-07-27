import React from 'react'
import {StyleSheet, TextInput, TextInputProps} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Colors} from '../constants/colors'
import {Fonts} from '../constants/fonts'
import {RFValue} from 'react-native-responsive-fontsize'

export default function LoginTextInput(props: TextInputProps) {
  return (
    <TextInput
      style={[styles.loginField, props.style]}
      placeholderTextColor={props.placeholderTextColor ?? Colors.mediumDarkBlue}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  loginField: {
    backgroundColor: Colors.white,
    color: Colors.mediumDarkBlue,
    borderRadius: 1000,
    fontFamily: Fonts.openSansRegular,
    paddingVertical: Spaces.normal,
    paddingHorizontal: Spaces.large,
    marginBottom: Spaces.medium,
    marginHorizontal: Spaces.normal,
    fontSize: RFValue(14, 568),
  },
})
