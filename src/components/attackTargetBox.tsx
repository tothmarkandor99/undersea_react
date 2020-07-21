import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Spaces} from '../constants/spaces'
import {AttackTarget} from '../model/attack/attackTarget'
import {Ionicons} from '@expo/vector-icons'
import {useDispatch, useSelector} from 'react-redux'
import {selectAttackTarget} from '../store/attack/attack.actions'
import {IApplicationState} from '../../store'
import {Colors} from '../constants/colors'

interface AttackTargetBoxProps {
  target: AttackTarget
  selected?: boolean
  first?: boolean
}

export default function AttackTargetBox({
  target,
  first = false,
}: AttackTargetBoxProps) {
  const {selectedTargetId} = useSelector(
    (state: IApplicationState) => state.app.attack,
  )
  const dispatch = useDispatch()

  return (
    <View style={[styles.borderContainer, first && {borderTopWidth: 1}]}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(selectAttackTarget(target))
        }}>
        <Text style={styles.name}>{target.name}</Text>
        {target.id === selectedTargetId && (
          <Ionicons name="ios-checkmark-circle" style={styles.selectedSymbol} />
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  borderContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.borderBlue,
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
    color: Colors.white,
    fontWeight: 'bold',
  },
  selectedSymbol: {
    color: Colors.logoBlue,
    paddingRight: Spaces.large,
  },
})
