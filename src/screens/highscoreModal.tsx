import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {Spaces} from '../constants/spaces'
import {
  getHighscores,
  setSearchPhrase,
} from '../store/highscore/highscore.actions'
import SearchField from '../components/searchField'
import {Colors} from '../constants/colors'
import Loading from '../components/loading'
import {SearchRequest} from '../model/search/search.request'

interface HighscoreModalProps {
  navigation: StackNavigationProp<any>
}

export default HighscoreModal
function HighscoreModal({navigation}: HighscoreModalProps) {
  const {scores, error, isLoading, search} = useSelector(
    (state: IApplicationState) => state.app.highscore,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHighscores(search as SearchRequest))
  }, [dispatch, search])

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.highscoreRow}>
          <SearchField
            value={search.searchPhrase}
            onChangeText={text => {
              dispatch(setSearchPhrase(text))
            }}
          />
        </View>
        <FlatList
          data={scores}
          renderItem={({item}) => {
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
    marginHorizontal: Spaces.medium,
  },
  highscoreRow: {
    flexDirection: 'row',
    paddingVertical: Spaces.medium,
    borderBottomColor: Colors.borderBlue,
    borderBottomWidth: 1,
  },
  highscoreText: {
    color: Colors.white,
  },
  highscorePlace: {
    paddingLeft: Spaces.medium,
    flex: 0.2,
  },
  highscoreName: {},
})
