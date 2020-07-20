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
import {Strings} from '../constants/strings'
import GameFooter from '../components/gameFooter'
import {getAttackTargets} from '../store/attack/attack.actions'
import {SearchRequest} from '../model/search.request'
import Loading from '../components/loading'

interface AttackTargetProps {
  navigation: StackNavigationProp<any>
}

export default function AttackTargetModal({navigation}: AttackTargetProps) {
  const {attackTargets, error, isLoading, selectedTargetCount} = useSelector(
    (state: IApplicationState) => state.app.attack,
  )
  const dispatch = useDispatch()

  const [searchPhrase, setSearchPhrase] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [itemPerPage, setItemPerPage] = useState<number>(10)

  useEffect(() => {
    dispatch(
      getAttackTargets({
        searchPhrase,
        page,
        itemPerPage,
      } as SearchRequest),
    )
  }, [dispatch, searchPhrase])

  const listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={[styles.text, styles.upperText]}>{Strings._1stStep}</Text>
        <Text style={styles.text}>{Strings.selectWhoYouWantToAttack}</Text>
        <SearchField
          onChangeText={text => {
            console.log(text)
            setSearchPhrase(text)
          }}
        />
        <Loading animating={isLoading} />
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
          data={attackTargets}
          renderItem={({item}) => {
            return <AttackTargetBox target={item} />
          }}
          keyExtractor={item => item.id.toString()}
        />
        <ModalButtonBar
          buttonTitle={Strings.next}
          buttonOnPress={() => {
            navigation.navigate('AttackUnitsModal')
          }}
          buttonActive={true}
        />
      </View>
      <GameFooter navigation={navigation} activeIcon="attack" />
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
    marginBottom: Spaces.normal,
  },
  listBody: {
    paddingHorizontal: Spaces.big,
  },
})
