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
import {Colors} from '../constants/colors'
import {useDispatch, useSelector} from 'react-redux'
import {selectUpgrade} from '../store/upgrade/upgrade.actions'
import {IApplicationState} from '../../store'
import {RFValue} from 'react-native-responsive-fontsize'

interface UpgradeBoxProps {
  upgrade: Upgrade
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function UpgradeBox({upgrade}: UpgradeBoxProps) {
  const {selectedId} = useSelector(
    (state: IApplicationState) => state.app.upgrade,
  )
  const dispatch = useDispatch()

  const selected = upgrade.id == selectedId
  const active = !upgrade.isPurchased && !(upgrade.remainingRounds > 0)

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(selectUpgrade(upgrade))
      }}
      disabled={!active}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: selected ? Colors.opaquestWhite : undefined,
          },
        ]}>
        {!upgrade.isPurchased && upgrade.remainingRounds != 0 && (
          <Text style={styles.remainingTime}>
            még {upgrade.remainingRounds} kör
          </Text>
        )}
        {upgrade.isPurchased && (
          <Image
            source={require('../../assets/img/done.png')}
            style={styles.ownedSymbol}
          />
        )}
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: upgrade.picture,
          }}
        />
        <Text style={styles.name}>{upgrade.name}</Text>
        <Text style={styles.description}>{upgrade.details}</Text>
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
  remainingTime: {
    color: Colors.logoBlue,
    position: 'absolute',
    top: Spaces.medium,
    left: Spaces.medium,
    fontWeight: 'bold',
  },
  ownedSymbol: {
    position: 'absolute',
    top: Spaces.medium,
    left: Spaces.medium,
  },
  image: {
    width: RFValue(150, 568),
    height: RFValue(100, 568),
    marginTop: Spaces.large,
    marginBottom: Spaces.small,
  },
  name: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  description: {
    color: Colors.white,
    textAlign: 'center',
    marginBottom: Spaces.small,
  },
})
