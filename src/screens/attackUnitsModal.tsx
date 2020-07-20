import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import AttackUnitBox from '../components/attackUnitBox'
import {Strings} from '../constants/strings'
import GameFooter from '../components/gameFooter'
import {getAttackUnits} from '../store/attack/attack.actions'
import Loading from '../components/loading'

interface AttackUnitsProps {
  navigation: StackNavigationProp<any>
}

export default function AttackUnitsModal({navigation}: AttackUnitsProps) {
  const {attackUnits, error, isLoading, selectedUnitCount} = useSelector(
    (state: IApplicationState) => state.app.attack,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAttackUnits())
  }, [dispatch])

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
      <View style={styles.contentContainer}>
        <FlatList
          style={styles.listBody}
          ListHeaderComponent={listHeader}
          data={attackUnits}
          renderItem={({item}) => {
            return <AttackUnitBox unit={item} />
          }}
          keyExtractor={item => item.id.toString()}
        />
        <ModalButtonBar buttonTitle={Strings.attack} buttonOnPress={() => {}} />
      </View>
      <GameFooter navigation={navigation} activeIcon="attack" />
      <Loading animating={isLoading} />
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
    flexShrink: 1,
    flexGrow: 1,
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
