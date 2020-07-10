import React from 'react'
import {StyleSheet, TextInput, TextInputProps} from 'react-native'
import {Spaces} from '../constants/spaces'

export default function LoginTextInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.loginField, props.style]}
      placeholderTextColor={props.placeholderTextColor ?? '#1C3E76'}
    />
  )
}

const styles = StyleSheet.create({
  loginField: {
    backgroundColor: 'white',
    color: '#1C3E76',
    borderRadius: 1000,
    paddingVertical: Spaces.normal,
    paddingHorizontal: Spaces.large,
    marginBottom: Spaces.medium,
    marginHorizontal: Spaces.normal,
  },
})
