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

interface GameFooterProps {
  navigation: StackNavigationProp<any>
  style?: StyleProp<ViewStyle>
}

export default function GameFooter({navigation, style}: GameFooterProps) {
  return (
    <LinearGradient
      style={[styles.footer, style]}
      colors={['#9FFFF0', '#6BEEE9', '#0FCFDE']}
      start={[0.5, 0]}
      end={[0.5, 1]}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('BuildingsModal')
        }}>
        <EpuletekSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>Épületek</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('AttackStack')
        }}>
        <HarcSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>Támadás</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('UpgradesModal')
        }}>
        <HarcSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>Fejlesztések</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('FightModal')
        }}>
        <HarcSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>Harc</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => {
          navigation.navigate('ArmyModal')
        }}>
        <SeregSvg height={50} width={50} fill="#327887" />
        <Text style={styles.footerButtonText}>Sereg</Text>
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
    fontFamily: 'Baloo',
  },
})
