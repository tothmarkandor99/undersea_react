import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, FlatList, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import {getFights} from '../store/fight/fight.actions'
import FightItem from '../components/fightItem'
import {Strings} from '../constants/strings'
import Loading from '../components/loading'
import {showMessage} from 'react-native-flash-message'
import GameFooter from '../components/gameFooter'
import {Colors} from '../constants/colors'
import {Fonts} from '../constants/fonts'

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

  useEffect(() => {
    if (error !== undefined) {
      showMessage({
        message: error,
        type: 'danger',
      })
    }
  }, [error])

  const renderEmptyList = () => {
    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>
          {Strings.youAreNotFightingAtTheMoment}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderWithArrow title={Strings.fight} backAction={navigation.goBack} />
      <FlatList
        ListEmptyComponent={renderEmptyList}
        style={styles.listBody}
        data={fights}
        renderItem={({item, index}) => (
          <FightItem first={index === 0} fight={item} />
        )}
        keyExtractor={(item, index) => {
          return index.toString()
        }}
      />
      <GameFooter navigation={navigation} activeIcon="units" />
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
  listBody: {
    paddingHorizontal: Spaces.big,
  },
  emptyList: {
    alignContent: 'center',
    marginTop: Spaces.medium,
  },
  emptyListText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.openSansBold,
  },
})
