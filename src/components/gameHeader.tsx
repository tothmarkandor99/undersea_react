import React from 'react'
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import {Spaces} from '../constants/spaces'
import {StackNavigationProp} from '@react-navigation/stack'
import LogoSvg from '../../assets/img/logo'
import {Colors} from '../constants/colors'
import Constants from 'expo-constants'

interface GameHeaderProps {
  navigation: StackNavigationProp<any>
}

export default function GameHeader({navigation}: GameHeaderProps) {
  return (
    <View style={styles.header}>
      <LogoSvg fill="#9FFFF0" width={75} height={21} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProfileModal')
        }}>
        <Image
          style={styles.avatar}
          resizeMode="contain"
          source={require('../../assets/img/avatar.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.mediumDarkBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: Spaces.medium,
  },
  avatar: {
    width: RFValue(31, 568),
    height: RFValue(31, 568),
    marginVertical: Spaces.medium,
  },
})
