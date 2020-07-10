import React from 'react'
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  GestureResponderEvent,
  View,
} from 'react-native'
import {Spaces} from '../constants/spaces'
import FancyButton from './fancyButton'

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
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    paddingVertical: Spaces.medium,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
