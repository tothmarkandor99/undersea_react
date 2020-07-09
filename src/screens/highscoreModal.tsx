import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {StyleSheet, TextInput, View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'

interface HighscoreModalProps {
  navigation: StackNavigationProp<any>
}

export default HighscoreModal
function HighscoreModal({navigation}: HighscoreModalProps) {
  return (
    <View style={styles.container}>
      <HeaderWithArrow title="Ranglista" backAction={navigation.goBack} />
      <View style={styles.highscoreRow}>
        <TextInput
          style={styles.search}
          placeholder="Felhasználónév"
          placeholderTextColor="#001234"></TextInput>
      </View>
      <View style={styles.highscoreRow}>
        <Text style={[styles.highscoreText, styles.highscorePlace]}>1.</Text>
        <Text style={[styles.highscoreText, styles.highscoreText]}>
          kicsikou86
        </Text>
      </View>
      <View style={styles.highscoreRow}>
        <Text style={[styles.highscoreText, styles.highscorePlace]}>2.</Text>
        <Text style={[styles.highscoreText, styles.highscoreText]}>
          kifcsikodu86
        </Text>
      </View>
      <View style={styles.highscoreRow}>
        <Text style={[styles.highscoreText, styles.highscorePlace]}>3.</Text>
        <Text style={[styles.highscoreText, styles.highscoreText]}>
          akicfsikou86
        </Text>
      </View>
      <View style={styles.highscoreRow}>
        <Text style={[styles.highscoreText, styles.highscorePlace]}>4.</Text>
        <Text style={[styles.highscoreText, styles.highscoreText]}>
          kidscsikoud86
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03255F',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  search: {
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
    borderRadius: 1000,
    paddingVertical: Spaces.normal,
    paddingHorizontal: Spaces.large,
    flex: 1,
  },
  highscoreRow: {
    marginHorizontal: Spaces.medium,
    flexDirection: 'row',
    paddingVertical: Spaces.medium,
    borderBottomColor: '#3F68AE',
    borderBottomWidth: 1,
  },
  highscoreText: {
    color: 'white',
  },
  highscorePlace: {
    paddingLeft: Spaces.medium,
    flex: 0.2,
  },
  highscoreName: {},
})
