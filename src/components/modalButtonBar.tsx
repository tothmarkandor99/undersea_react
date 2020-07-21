import React from 'react'
import {StyleSheet, GestureResponderEvent, View} from 'react-native'
import {Spaces} from '../constants/spaces'
import FancyButton from './fancyButton'
import {Colors} from '../constants/colors'

interface ModalButtonBarProps {
  buttonActive?: boolean
  buttonTitle: string
  buttonOnPress?: ((event: GestureResponderEvent) => void) | undefined
}
export default function ModalButtonBar({
  buttonActive,
  buttonTitle,
  buttonOnPress,
}: ModalButtonBarProps) {
  return (
    <View style={styles.whiteArea}>
      <FancyButton
        title={buttonTitle}
        onPress={buttonOnPress}
        active={buttonActive}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  whiteArea: {
    backgroundColor: Colors.opaqueWhite,
    paddingVertical: Spaces.medium,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
