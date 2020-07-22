import React from 'react'
import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import {Strings} from '../constants/strings'
import {Spaces} from '../constants/spaces'
import {Colors} from '../constants/colors'
import {Fonts} from '../constants/fonts'
import {useDispatch} from 'react-redux'
import {newRound} from '../store/newRound/newRound.actions'

const {height} = Dimensions.get('window')
const CIRCLE_SIZE = 40

export default function AdminButton() {
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      style={styles.ball}
      onPress={() => {
        dispatch(newRound(1))
      }}>
      <Text style={styles.text}>{Strings.newRound}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ball: {
    position: 'absolute',
    top: height * 0.45 - CIRCLE_SIZE / 2,
    left: Spaces.normal,
    width: 2 * CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: Colors.darkBlue,
    elevation: 4,
    zIndex: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.white,
    borderWidth: 2,
  },
  text: {
    fontFamily: Fonts.baloo,

    color: Colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
