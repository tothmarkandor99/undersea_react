import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import AttackTargetBox from '../components/attackTargetBox'
import SearchField from '../components/searchField'
import {Strings} from '../constants/strings'
import {
  getAttackTargets,
  setSearchPhrase,
  incrementAttackTargetsPage,
} from '../store/attack/attack.actions'
import {SearchRequest} from '../model/search/search.request'
import Loading from '../components/loading'
import {Colors} from '../constants/colors'
import {Fonts} from '../constants/fonts'
import {showMessage} from 'react-native-flash-message'

interface AttackTargetScreenProps {
  navigation: StackNavigationProp<any>
}

export default function AttackTargetScreen({
  navigation,
}: AttackTargetScreenProps) {
  const {
    attackTargets,
    error,
    isLoading,
    selectedTargetId,
    search,
  } = useSelector((state: IApplicationState) => state.app.attack)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAttackTargets(search as SearchRequest))
  }, [dispatch, search])

  useEffect(() => {
    if (error !== undefined) {
      showMessage({
        message: error,
        type: 'danger',
      })
    }
  }, [error])

  const renderEmptyList = () => {
    if (isLoading) {
      return <></>
    }
    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>
          {Strings.noPlayerWithThisNameExist}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={[styles.text, styles.upperText]}>{Strings._1stStep}</Text>
        <Text style={styles.text}>{Strings.selectWhoYouWantToAttack}</Text>
        <SearchField
          placeholder={Strings.username}
          onChangeText={text => {
            dispatch(setSearchPhrase(text))
          }}
          value={search.searchPhrase}
          style={styles.searchField}
        />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          onEndReached={() => {
            dispatch(incrementAttackTargetsPage())
          }}
          ListEmptyComponent={renderEmptyList}
          style={styles.listBody}
          data={attackTargets}
          renderItem={({item}) => {
            return <AttackTargetBox target={item} />
          }}
          keyExtractor={item => item.id.toString()}
        />
        <ModalButtonBar
          buttonTitle={Strings.next}
          buttonOnPress={() => {
            navigation.navigate('AttackUnitsScreen')
          }}
          buttonActive={!isLoading && selectedTargetId !== undefined}
        />
      </View>
      <Loading animating={isLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDarkBlue,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  contentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
  text: {
    color: Colors.white,
    marginHorizontal: Spaces.medium,
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
  emptyList: {
    alignContent: 'center',
    marginTop: Spaces.medium,
  },
  emptyListText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.openSansBold,
  },
  searchField: {
    marginTop: Spaces.large,
    marginHorizontal: Spaces.medium,
  },
})
