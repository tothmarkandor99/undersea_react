import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import AttackTargetBox from '../components/attackTargetBox'
import SearchField from '../components/searchField'
import { Strings } from '../constants/strings'

interface AttackTargetProps {
  navigation: StackNavigationProp<any>
}

export default function AttackTargetModal({navigation}: AttackTargetProps) {
  const listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={[styles.text, styles.upperText]}>{Strings._1stStep}</Text>
        <Text style={styles.text}>{Strings.selectWhoYouWantToAttack}</Text>
        <SearchField />
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
          return <AttackTargetBox />
        }}
        keyExtractor={(item, index) => {
          return index.toString() // TODO: normális keyExtractor
        }}
      />
      <ModalButtonBar
        buttonTitle={Strings.next}
        buttonOnPress={() => {
          navigation.navigate('AttackUnitsModal')
        }}
        buttonActive={true}
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
  text: {
    color: 'white',
  },
  upperText: {
    fontWeight: 'bold',
    marginTop: Spaces.big,
  },
  listHeader: {
    marginBottom: Spaces.normal,
  },
  listBody: {
    paddingHorizontal: Spaces.big,
  },
})
