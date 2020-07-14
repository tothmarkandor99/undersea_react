import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Unit} from '../model/unit'
import {Ionicons} from '@expo/vector-icons'

interface AttackTargetBoxProps {
  unit?: Unit // TODO: megfelelő típus kell
  selected?: boolean
  first?: boolean
}

export default function AttackTargetBox({
  unit,
  selected = false,
  first = false,
}: AttackTargetBoxProps) {
  return (
    <View style={[styles.borderContainer, first && {borderTopWidth: 1}]}>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.name}>Jóskagyerek // TODO: trim name length</Text>
        {selected && (
          <Ionicons name="ios-checkmark-circle" style={styles.selectedSymbol} />
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  borderContainer: {
    borderBottomWidth: 1,
    borderColor: '#3F68AE',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: Spaces.medium,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 60,
    height: 60,
  },
  rightSection: {
    paddingLeft: Spaces.medium,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedSymbol: {
    color: '#9FFFF0',
    paddingRight: Spaces.large,
  },
})
