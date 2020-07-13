import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import BuildingBox from '../components/buildingBox'

interface BuildingsModalProps {
  navigation: StackNavigationProp<any>
}

export default BuildingsModal
function BuildingsModal({navigation}: BuildingsModalProps) {
  const [selectedBuildingId, setSelectedBuildingId] = useState<
    number | undefined
  >(undefined)

  const listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={[styles.text, styles.upperText]}>
          Jelöld ki, amelyiket szeretnéd megvenni.
        </Text>
        <Text style={styles.text}>Egyszerre csak egy épület épülhet!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderWithArrow title="Épületek" backAction={navigation.goBack} />
      <FlatList
        style={styles.listBody}
        ListHeaderComponent={listHeader}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={({item}) => {
          return <BuildingBox />
        }}
        keyExtractor={(item, index) => {
          return index.toString() // TODO: normális keyExtractor
        }}
      />
      <ModalButtonBar buttonTitle="Megveszem" buttonOnPress={() => {}} />
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
  text: {
    color: 'white',
  },
  upperText: {
    fontWeight: 'bold',
    marginTop: Spaces.big,
  },
  listHeader: {
    marginBottom: Spaces.giant,
  },
  listBody: {
    paddingHorizontal: Spaces.big,
  },
})
