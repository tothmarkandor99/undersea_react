import React, {useState} from 'react'
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  GestureResponderEvent,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import Animated from 'react-native-reanimated'
import {PanGestureHandler, State} from 'react-native-gesture-handler'

const {width, height} = Dimensions.get('window')
const CIRCLE_SIZE = 70
const {cond, eq, add, set, Value, event} = Animated

export default function AdminButton() {
  const [dragX, setDragX] = useState(new Value(0))
  const [dragY, setDragY] = useState(new Value(0))
  const [offsetX, setOffsetX] = useState(new Value(width / 2))
  const [offsetY, setOffsetY] = useState(new Value(height / 2))
  const [gestureState, setGestureState] = useState(new Value(-1))
  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX: dragX,
        translationY: dragY,
        state: gestureState,
      },
    },
  ])
  const transX = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetX, dragX),
    set(offsetX, add(offsetX, dragX)),
  )
  const transY = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetY, dragY),
    set(offsetY, add(offsetY, dragY)),
  )

  return (
    <PanGestureHandler
      maxPointers={1}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onGestureEvent}>
      <Animated.View
        style={
          (styles.ball,
          [
            {
              transform: [
                {
                  translateX: transX,
                },
                {
                  translateY: transY,
                },
              ],
            },
          ])
        }></Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  ball: {
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'red',
    elevation: 4,
    zIndex: 51,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
