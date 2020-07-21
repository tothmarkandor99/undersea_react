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
import {useDispatch} from 'react-redux'
import {
  decrementArmyCount,
  incrementArmyCount,
} from '../store/army/army.actions'
import {Colors} from '../constants/colors'

interface ArmyBoxProps {
  unit: PurchasableUnit
}

export default function ArmyBox({unit}: ArmyBoxProps) {
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/img/avatar.png')}
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
        <TouchableOpacity
          onPress={() => {
            dispatch(decrementArmyCount(unit))
          }}>
          <AntDesign name="minuscircle" style={styles.counterControl} />
        </TouchableOpacity>
        <Text style={styles.counterText}>{unit.viewCount}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(incrementArmyCount(unit))
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
    borderColor: Colors.borderBlue,
    marginBottom: Spaces.normal,
    paddingVertical: Spaces.medium,
    paddingHorizontal: Spaces.extraLarge,
  },
  remainingTime: {
    color: Colors.logoBlue,
    position: 'absolute',
    top: Spaces.medium,
    left: Spaces.medium,
    fontWeight: 'bold',
  },
  ownedSymbol: {
    color: Colors.logoBlue,
    position: 'absolute',
    top: Spaces.medium,
    left: Spaces.medium,
  },
  image: {
    marginTop: Spaces.normal,
    marginBottom: Spaces.small,
  },
  name: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  dataRow: {
    flexDirection: 'row',
  },
  dataName: {
    color: Colors.white,
    flex: 0.6,
  },
  dataValue: {
    color: Colors.white,
    flex: 0.4,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterControl: {
    color: Colors.logoBlue,
  },
  counterText: {
    color: Colors.white,
    width: 50,
    textAlign: 'center',
  },
})
