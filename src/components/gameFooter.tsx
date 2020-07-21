import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native'
import EpuletekSvg from '../../assets/img/epuletek_nav'
import HarcSvg from '../../assets/img/harc_nav'
import SeregSvg from '../../assets/img/sereg_nav'
import {StackNavigationProp} from '@react-navigation/stack'
import {Strings} from '../constants/strings'
import {Fonts} from '../constants/fonts'
import {Colors} from '../constants/colors'
import {Spaces} from '../constants/spaces'

interface GameFooterProps {
  navigation: StackNavigationProp<any>
  style?: StyleProp<ViewStyle>
  activeIcon: 'home' | 'city' | 'attack' | 'units'
}

export default function GameFooter({
  navigation,
  style,
  activeIcon,
}: GameFooterProps) {
  return (
    <LinearGradient
      style={[styles.footer, style]}
      colors={[
        Colors.buttonGradient1,
        Colors.buttonGradient2,
        Colors.buttonGradient3,
      ]}
      start={[0.5, 0]}
      end={[0.5, 1]}>
      <TouchableOpacity
        disabled={activeIcon === 'home'}
        style={[
          styles.footerButton,
          activeIcon === 'home' && styles.footerButtonActive,
        ]}
        onPress={() => {
          navigation.navigate('GameScreen')
        }}>
        <Image source={require('../../assets/img/footer/tab_home.png')} />
        <Text style={styles.footerButtonText}>{Strings.home}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={activeIcon === 'city'}
        style={[
          styles.footerButton,
          activeIcon === 'city' && styles.footerButtonActive,
        ]}
        onPress={() => {
          navigation.navigate('CityModal')
        }}>
        <Image source={require('../../assets/img/footer/tab_city.png')} />
        <Text style={styles.footerButtonText}>{Strings.city}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={activeIcon === 'attack'}
        style={[
          styles.footerButton,
          activeIcon === 'attack' && styles.footerButtonActive,
        ]}
        onPress={() => {
          navigation.navigate('AttackStack')
        }}>
        <Image source={require('../../assets/img/footer/tab_attack.png')} />
        <Text style={styles.footerButtonText}>{Strings.attack}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={activeIcon === 'units'}
        style={[
          styles.footerButton,
          activeIcon === 'units' && styles.footerButtonActive,
        ]}
        onPress={() => {
          navigation.navigate('FightModal')
        }}>
        <Image source={require('../../assets/img/footer/tab_units.png')} />
        <Text style={styles.footerButtonText}>{Strings.myUnits}</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'yellow',
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
