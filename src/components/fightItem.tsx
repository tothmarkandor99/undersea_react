import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Fight} from '../model/fight/fight'
import {Colors} from '../constants/colors'

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
    borderColor: Colors.borderBlue,
  },
  city: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.white,
    marginBottom: Spaces.normal,
  },
})
