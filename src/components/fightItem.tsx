import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Spaces} from '../constants/spaces'

interface FightItemProps {
  first?: boolean
}

export default function FightItem({first = false}: FightItemProps) {
  return (
    <View
      style={[
        styles.container,
        first && {
          borderTopWidth: 2,
          marginTop: Spaces.big,
        },
      ]}>
      <Text style={[styles.text, styles.city]}>Atlantisz</Text>
      <Text style={styles.text}>6 Lézercápa</Text>
      <Text style={styles.text}>11 Lézercápa</Text>
      <Text style={styles.text}>40 Csatacsikó</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spaces.medium,
    borderBottomWidth: 2,
    borderColor: '#3F68AE',
  },
  city: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    marginBottom: Spaces.normal,
  },
})
