import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Building} from '../model/building/building'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {selectBuilding} from '../store/building/building.actions'

interface BuildingBoxProps {
  building: Building // TODO: kivenni a nullable-t
}

export default function BuildingBox({building}: BuildingBoxProps) {
  const {selectedBuilding} = useSelector(
    (state: IApplicationState) => state.app.building,
  )
  const dispatch = useDispatch()

  const selected = selectedBuilding && selectedBuilding.id === building.id
  const active =
    (selectedBuilding && selectedBuilding.id === building.id) ||
    selectedBuilding === undefined

  const select = () => {
    dispatch(selectBuilding(building))
  }

  return (
    <TouchableOpacity onPress={select} disabled={!active}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: selected ? 'rgba(255, 255, 255, 0.12)' : undefined,
          },
        ]}>
        <Image style={styles.image} source={{uri: building.pictureUrl}} />
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
    borderColor: 'rgba(255, 255, 255, 0.12)',
    marginBottom: Spaces.normal,
    paddingVertical: Spaces.medium,
    paddingHorizontal: Spaces.extraLarge,
  },
  image: {
    marginBottom: Spaces.small,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Spaces.small,
  },
  count: {
    color: 'white',
  },
  price: {
    color: 'white',
  },
})
