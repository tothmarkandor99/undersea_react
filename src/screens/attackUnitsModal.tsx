import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import AttackUnitBox from '../components/attackUnitBox'
import { Strings } from '../constants/strings'

interface AttackUnitsProps {
  navigation: StackNavigationProp<any>
}

export default function AttackUnitsModal({navigation}: AttackUnitsProps) {
  const listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={[styles.text, styles.upperText]}>{Strings._2ndStep}</Text>
        <Text style={styles.text}>{Strings.selectWhoYouWantToAttack}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderWithArrow title={Strings.attack} backAction={navigation.goBack} />
      <FlatList
        style={styles.listBody}
        ListHeaderComponent={listHeader}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={({item}) => {
          return <AttackUnitBox />
        }}
        keyExtractor={(item, index) => {
          return index.toString() // TODO: normális keyExtractor
        }}
      />
      <ModalButtonBar buttonTitle={Strings.attack} buttonOnPress={() => {}} />
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
    marginBottom: Spaces.extraLarge,
  },
  listBody: {
    paddingHorizontal: Spaces.big,
  },
})
