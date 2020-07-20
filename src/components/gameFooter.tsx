import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import EpuletekSvg from '../../assets/img/epuletek_nav'
import HarcSvg from '../../assets/img/harc_nav'
import SeregSvg from '../../assets/img/sereg_nav'
import {StackNavigationProp} from '@react-navigation/stack'
import {Strings} from '../constants/strings'
import {Fonts} from '../constants/fonts'
import {Colors} from '../constants/colors'

interface GameFooterProps {
  navigation: StackNavigationProp<any>
  style?: StyleProp<ViewStyle>
  activeIcon: 'home' | 'city' | 'attack' | 'army'
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
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('BuildingsModal')
        }}>
        <EpuletekSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>{Strings.buildings}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('AttackStack')
        }}>
        <HarcSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>{Strings.attack}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('UpgradesModal')
        }}>
        <HarcSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>{Strings.upgrades}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('FightModal')
        }}>
        <HarcSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>{Strings.fight}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('ArmyModal')
        }}>
        <SeregSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>{Strings.army}</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonImage: {
    height: 50, // TODO: flexbox vagy megfelelő méretű asset a fix méret helyett
    width: 50,
  },
  footerButtonText: {
    color: '#367987',
    fontFamily: Fonts.baloo,
  },
})
