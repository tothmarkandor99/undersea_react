import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, TextInput, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'

interface AttackUnitsModalProps {
  navigation: StackNavigationProp<any>
}

export default AttackUnitsModal
function AttackUnitsModal({navigation}: AttackUnitsModalProps) {
  const [selectedBuildingId, setSelectedBuildingId] = useState<
    number | undefined
  >(undefined)

  return (
    <View style={styles.container}>
      <HeaderWithArrow title="Támadás" backAction={navigation.goBack} />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={({item}) => {
          /* TODO: komponensbe kiszervezni */
          return (
            <View style={styles.highscoreRow}>
              <Text style={[styles.highscoreText, styles.highscorePlace]}>
                "lul"
              </Text>
              <Text style={[styles.highscoreText, styles.highscoreText]}>
                hal
              </Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => {
          return index.toString()
        }}
      />
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
