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
import {Upgrade} from '../model/upgrade/upgrade'
import {Ionicons} from '@expo/vector-icons'

interface UpgradeBoxProps {
  upgrade?: Upgrade // TODO: kivenni a nullable-t
  selected?: boolean
  active?: boolean
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function UpgradeBox({
  onPress,
  upgrade,
  active = true,
  selected = false,
}: UpgradeBoxProps) {
  return (
    <TouchableOpacity onPress={onPress} disabled={!active}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: selected ? 'rgba(255, 255, 255, 0.12)' : undefined,
          },
        ]}>
        <Text style={styles.remainingTime}>még 3 kör</Text>
        <Ionicons name="ios-checkmark-circle" style={styles.ownedSymbol} />
        <Image
          style={styles.image}
          source={require('../../assets/img/Group21.png')}
        />
        <Text style={styles.name}>Iszaptraktor</Text>
        <Text style={styles.description}>
          növeli a krumpli termesztést 10%-kal
        </Text>
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
  description: {
    color: 'white',
    textAlign: 'center',
    marginBottom: Spaces.small,
  },
})
