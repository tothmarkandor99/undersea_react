import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Fight} from '../model/fight/fight'

interface FightItemProps {
  first?: boolean
  fight: Fight
}

export default function FightItem({first = false, fight}: FightItemProps) {
  return (
    <View
      style={[
        styles.container,
        first && {
          borderTopWidth: 2,
          marginTop: Spaces.big,
        },
      ]}>
      <Text style={[styles.text, styles.city]}>{fight.countryName}</Text>
      {fight.units.map(item => (
        <Text style={styles.text} key={item.name}>
          {item.count} {item.name}
        </Text>
      ))}
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
