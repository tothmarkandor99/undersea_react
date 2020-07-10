import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, TextInput, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import FightItem from '../components/fightItem'

interface FightModalProps {
  navigation: StackNavigationProp<any>
}

export default FightModal
function FightModal({navigation}: FightModalProps) {
  const [selectedBuildingId, setSelectedBuildingId] = useState<
    number | undefined
  >(undefined)

  return (
    <View style={styles.container}>
      <HeaderWithArrow title="Harc" backAction={navigation.goBack} />
      <View style={styles.contentContainer}>
        <FlatList
          style={styles.list}
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({item, index}) => <FightItem first={index === 0} />}
          keyExtractor={(item, index) => {
            return index.toString()
          }}
        />
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
  contentContainer: {
    marginHorizontal: Spaces.medium,
  },
  list: {},
})
