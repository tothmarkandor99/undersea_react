import React from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Building} from '../model/building/building'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {selectBuilding} from '../store/building/building.actions'
import {Colors} from '../constants/colors'
import {RFValue} from 'react-native-responsive-fontsize'

interface BuildingBoxProps {
  building: Building
}

export default function BuildingBox({building}: BuildingBoxProps) {
  const {selectedBuildingId} = useSelector(
    (state: IApplicationState) => state.app.building,
  )
  const dispatch = useDispatch()

  const selected = selectedBuildingId && selectedBuildingId === building.id

  const select = () => {
    dispatch(selectBuilding(building))
  }

  return (
    <TouchableOpacity onPress={select}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: selected ? Colors.opaquestWhite : undefined,
          },
        ]}>
        {building.remainingRounds !== 0 && (
          <Text style={styles.remainingTime}>
            még {building.remainingRounds} kör
          </Text>
        )}
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: building.pictureUrl,
          }}
        />
        <Text style={styles.name}>{building.name}</Text>
        <Text style={styles.description}>{building.description}</Text>
        <Text style={styles.count}>{building.count} db</Text>
        <Text style={styles.price}>{building.price} Gyöngy / db</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.opaquestWhite,
    marginBottom: Spaces.normal,
    paddingVertical: Spaces.medium,
    paddingHorizontal: Spaces.extraLarge,
  },
  image: {
    width: RFValue(150, 568),
    height: RFValue(100, 568),
    marginBottom: Spaces.small,
  },
  name: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  description: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Spaces.small,
  },
  count: {
    color: Colors.white,
  },
  price: {
    color: Colors.white,
  },
  remainingTime: {
    color: Colors.logoBlue,
    position: 'absolute',
    top: Spaces.medium,
    left: Spaces.medium,
    fontWeight: 'bold',
  },
})
