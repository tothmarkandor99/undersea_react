import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, TextInput, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import {getHighscores} from '../store/highscore/highscore.actions'
import SearchField from '../components/searchField'

interface HighscoreModalProps {
  navigation: StackNavigationProp<any>
}

export default HighscoreModal
function HighscoreModal({navigation}: HighscoreModalProps) {
  const {scores, error, isLoading} = useSelector(
    (state: IApplicationState) => state.app.highscore,
  )
  const dispatch = useDispatch()

  const [searchPhrase, setSearchPhrase] = useState('')
  const [page, setPage] = useState(0)
  const [itemPerPage, setItemPerPage] = useState(10)

  useEffect(() => {
    dispatch(
      getHighscores({
        searchPhrase: searchPhrase,
        page: page,
        itemPerPage: itemPerPage,
      }),
    )
  }, [searchPhrase, page, itemPerPage, dispatch])

  return (
    <View style={styles.container}>
      <HeaderWithArrow title="Ranglista" backAction={navigation.goBack} />
      <View style={styles.contentContainer}>
        <View style={styles.highscoreRow}>
          <SearchField />
        </View>
        <FlatList
          data={scores}
          renderItem={({item}) => {
            /* TODO: komponensbe kiszervezni */
            return (
              <View style={styles.highscoreRow}>
                <Text style={[styles.highscoreText, styles.highscorePlace]}>
                  {item.place}
                </Text>
                <Text style={[styles.highscoreText, styles.highscoreText]}>
                  {item.name}
                </Text>
              </View>
            )
          }}
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
  highscoreRow: {
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
