import React, {useState} from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Unit} from '../model/unit'
import Slider from '@react-native-community/slider'

interface AttackUnitBoxProps {
  unit?: Unit // TODO: kivenni a nullable-t
}

export default function AttackUnitBox({unit}: AttackUnitBoxProps) {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/img/Group21.png')}
      />
      <View style={styles.rightSection}>
        <Text style={styles.name}>Iszaptraktor: {count} db</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={50}
          onValueChange={value => {
            setCount(value)
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
