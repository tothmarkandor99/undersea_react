import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
  View,
} from 'react-native'
import EpuletekSvg from '../../assets/img/epuletek_nav'
import HarcSvg from '../../assets/img/harc_nav'
import SeregSvg from '../../assets/img/sereg_nav'
import {StackNavigationProp} from '@react-navigation/stack'
import {Strings} from '../constants/strings'
import {Fonts} from '../constants/fonts'
import {Colors} from '../constants/colors'
import {Spaces} from '../constants/spaces'
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'

export default function GameFooter({
  navigation,
  descriptors,
  state,
}: BottomTabBarProps) {
  return (
    <LinearGradient
      style={styles.footer}
      colors={[
        Colors.buttonGradient1,
        Colors.buttonGradient2,
        Colors.buttonGradient3,
      ]}
      start={[0.5, 0]}
      end={[0.5, 1]}>
      {state.routes.map((item, index) => {
        const {options} = descriptors[item.key]
        const isFocused = state.index === index

        return (
          <TouchableOpacity
            key={item.name}
            disabled={isFocused}
            style={[
              styles.footerButton,
              isFocused && styles.footerButtonActive,
            ]}
            onPress={() => {
              navigation.navigate(item.name)
            }}>
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                size: 14,
                color: 'green',
              })}
            <Text>{options.title}</Text>
          </TouchableOpacity>
        )
      })}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Spaces.normal,
    paddingBottom: Spaces.small,
  },
  footerButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  footerButtonActive: {
    opacity: 1,
  },
  footerButtonText: {
    color: Colors.darkBlue,
    fontFamily: Fonts.baloo,
  },
})
