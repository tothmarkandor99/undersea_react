import React from 'react'
import {StyleSheet, TextInput, TextInputProps} from 'react-native'
import {Spaces} from '../constants/spaces'

export default function SearchField(props: TextInputProps) {
  return (
    <TextInput
      style={[styles.search, props.style]}
      placeholder="Felhasználónév"
      placeholderTextColor="#001234"
      onChangeText={text => {}}></TextInput>
  )
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
    borderRadius: 1000,
    paddingVertical: Spaces.normal,
    paddingHorizontal: Spaces.medium,
    flex: 1,
    color: '#001234',
  },
})
