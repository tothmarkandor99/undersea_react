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

interface BuildingBoxProps {
  building?: Building // TODO: kivenni a nullable-t
  selected?: boolean
  active?: boolean
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function BuildingBox({
  onPress,
  building,
  active = true,
  selected = false,
}: BuildingBoxProps) {
  if (active) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: selected
                ? 'rgba(255, 255, 255, 0.12)'
                : undefined,
            },
          ]}>
          <Image source={require('../../assets/img/avatar.png')} />
          <Text style={styles.name}>Zátonyvár</Text>
          <Text style={styles.description}>
            50 ember-t ad a népességhez 200 krumplit termel körönként
          </Text>
          <Text style={styles.count}>1 db</Text>
          <Text style={styles.price}>450 Gyöngy / db</Text>
        </View>
      </TouchableOpacity>
    )
  } else {
    // TODO: kiszervezni a belső komponenst
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: selected ? 'rgba(255, 255, 255, 0.12)' : undefined,
          },
        ]}>
        <Image source={require('../../assets/img/avatar.png')} />
        <Text style={styles.name}>Zátonyvár</Text>
        <Text style={styles.description}>
          50 ember-t ad a népességhez 200 krumplit termel körönként
        </Text>
        <Text style={styles.count}>1 db</Text>
        <Text style={styles.price}>450 Gyöngy / db</Text>
      </View>
    )
  }
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
