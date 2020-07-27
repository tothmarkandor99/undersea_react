import React from 'react'
import {StyleSheet, TextInput, TextInputProps} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Colors} from '../constants/colors'
import {Fonts} from '../constants/fonts'

export default function SearchField(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.search, props.style]}
      placeholderTextColor="#001234"></TextInput>
  )
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: Colors.opaquerWhite,
    borderRadius: 1000,
    paddingVertical: Spaces.normal,
    paddingHorizontal: Spaces.medium,
    color: Colors.darkBlue,
    fontFamily: Fonts.openSansRegular,
  },
})
