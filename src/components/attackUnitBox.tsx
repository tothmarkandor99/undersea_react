import React, {useState} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import {Spaces} from '../constants/spaces'
import {AttackUnit} from '../model/attack/attackUnit'
import Slider from '@react-native-community/slider'
import {useDispatch} from 'react-redux'
import {setAttackUnitCount} from '../store/attack/attack.actions'

interface AttackUnitBoxProps {
  unit: AttackUnit
}

export default function AttackUnitBox({unit}: AttackUnitBoxProps) {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: unit.imageUrl}} />
      <View style={styles.rightSection}>
        <Text style={styles.name}>
          {unit.name}: {unit.count} db
        </Text>
        <Slider
          disabled={unit.maxCount === 0}
          style={styles.slider}
          minimumValue={0}
          maximumValue={unit.maxCount}
          onValueChange={value => {
            dispatch(setAttackUnitCount(unit, value))
          }}
          step={1}
          minimumTrackTintColor="#9FFFF0"
          maximumTrackTintColor="#9FFFF0"
          thumbTintColor="#9FFFF0"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: Spaces.normal,
    paddingVertical: Spaces.medium,
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
  slider: {},
})
