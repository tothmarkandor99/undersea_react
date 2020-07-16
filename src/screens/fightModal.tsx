import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import {getFights} from '../store/fight/fight.actions'
import FightItem from '../components/fightItem'
import {Strings} from '../constants/strings'

interface FightModalProps {
  navigation: StackNavigationProp<any>
}

export default FightModal
function FightModal({navigation}: FightModalProps) {
  const {fights, error, isLoading} = useSelector(
    (state: IApplicationState) => state.app.fight,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFights())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <HeaderWithArrow title={Strings.fight} backAction={navigation.goBack} />
      <FlatList
        style={styles.listBody}
        data={fights}
        renderItem={({item, index}) => (
          <FightItem first={index === 0} fight={item} />
        )}
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
  listBody: {
    paddingHorizontal: Spaces.big,
  },
})
