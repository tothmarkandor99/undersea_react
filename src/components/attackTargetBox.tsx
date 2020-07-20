import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Spaces} from '../constants/spaces'
import {AttackTarget} from '../model/attack/attackTarget'
import {Ionicons} from '@expo/vector-icons'
import {useDispatch} from 'react-redux'
import {selectAttackTarget} from '../store/attack/attack.actions'

interface AttackTargetBoxProps {
  target: AttackTarget // TODO: megfelelő típus kell
  selected?: boolean
  first?: boolean
}

export default function AttackTargetBox({
  target,
  first = false,
}: AttackTargetBoxProps) {
  const dispatch = useDispatch()

  return (
    <View style={[styles.borderContainer, first && {borderTopWidth: 1}]}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(selectAttackTarget(target))
        }}>
        <Text style={styles.name}>{target.name}</Text>
        {target.selected && (
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
