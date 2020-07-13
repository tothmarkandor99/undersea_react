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
import {AntDesign} from '@expo/vector-icons'

interface ArmyBoxProps {
  unit?: Unit // TODO: kivenni a nullable-t
}

export default function ArmyBox({unit}: ArmyBoxProps) {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/img/Group21.png')}
      />
      <Text style={styles.name}>Iszaptraktor</Text>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Birtokodban</Text>
        <Text style={styles.dataValue}>0 db</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Támadás/Védekezés</Text>
        <Text style={styles.dataValue}>5/5</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Zsold (kör/példány)</Text>
        <Text style={styles.dataValue}>1 Gyöngy</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Ellátmány (kör/példány)</Text>
        <Text style={styles.dataValue}>1 Korall</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Ár</Text>
        <Text style={styles.dataValue}>200 Gyöngy</Text>
      </View>
      <View style={styles.counterRow}>
        <TouchableOpacity
          onPress={() => {
            setCount(count - 1)
          }}>
          <AntDesign name="minuscircle" style={styles.counterControl} />
        </TouchableOpacity>
        <Text style={styles.counterText}>{count}</Text>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1)
          }}>
          <AntDesign name="pluscircle" style={styles.counterControl} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#3F68AE',
    marginBottom: Spaces.normal,
    paddingVertical: Spaces.medium,
    paddingHorizontal: Spaces.extraLarge,
  },
  remainingTime: {
    color: '#9FFFF0',
    position: 'absolute',
    top: Spaces.medium,
    left: Spaces.medium,
    fontWeight: 'bold',
  },
  ownedSymbol: {
    color: '#9FFFF0',
    position: 'absolute',
    top: Spaces.medium,
    left: Spaces.medium,
  },
  image: {
    marginTop: Spaces.normal,
    marginBottom: Spaces.small,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
  },
  dataRow: {
    flexDirection: 'row',
  },
  dataName: {
    color: 'white',
    flex: 0.6,
  },
  dataValue: {
    color: 'white',
    flex: 0.4,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterControl: {
    color: '#9FFFF0',
  },
  counterText: {
    color: 'white',
    width: 50,
    textAlign: 'center',
  },
})
