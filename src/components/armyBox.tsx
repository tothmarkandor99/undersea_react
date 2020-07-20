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
import {PurchasableUnit} from '../model/army/purchasableUnit'
import {AntDesign} from '@expo/vector-icons'

interface ArmyBoxProps {
  unit: PurchasableUnit // TODO: kivenni a nullable-t
  onIncrement?: ((event: GestureResponderEvent) => void) | undefined
  onDecrement?: ((event: GestureResponderEvent) => void) | undefined
}

export default function ArmyBox({
  unit,
  onIncrement,
  onDecrement,
}: ArmyBoxProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/img/Group21.png')}
      />
      <Text style={styles.name}>{unit.name}</Text>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Birtokodban</Text>
        <Text style={styles.dataValue}>{unit.count} db</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Támadás/Védekezés</Text>
        <Text style={styles.dataValue}>
          {unit.attackScore}/{unit.defenseScore}
        </Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Zsold (kör/példány)</Text>
        <Text style={styles.dataValue}>{unit.pearlCostPerTurn} Gyöngy</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Ellátmány (kör/példány)</Text>
        <Text style={styles.dataValue}>{unit.coralCostPerTurn} Korall</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataName}>Ár</Text>
        <Text style={styles.dataValue}>{unit.price} Gyöngy</Text>
      </View>
      <View style={styles.counterRow}>
        <TouchableOpacity onPress={onDecrement}>
          <AntDesign name="minuscircle" style={styles.counterControl} />
        </TouchableOpacity>
        <Text style={styles.counterText}>{unit.viewCount}</Text>
        <TouchableOpacity onPress={onIncrement}>
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
