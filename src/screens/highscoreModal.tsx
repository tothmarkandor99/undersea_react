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
import {showMessage} from 'react-native-flash-message'

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

  useEffect(() => {
    if (error !== undefined) {
      showMessage({
        message: error,
        type: 'danger',
      })
    }
  }, [error])

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.searchRow}>
          <SearchField
            value={search.searchPhrase}
            onChangeText={text => {
              dispatch(setSearchPhrase(text))
            }}
          />
        </View>
        <FlatList
          data={scores}
          renderItem={({item, index}) => {
            return (
              <View
                style={[
                  styles.highscoreRow,
                  index === 0 ? styles.firstHighscoreRow : null,
                ]}>
                <Text style={[styles.highscoreText, styles.highscorePlace]}>
                  {item.place}
                </Text>
                <Text style={[styles.highscoreText, styles.highscoreName]}>
                  {item.name.substring(0, 20) +
                    (item.name.substring(0, 20) !== item.name ? '...' : '')}
                </Text>
                <Text style={[styles.highscoreText, styles.highscoreScore]}>
                  {item.score}
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
    flex: 1,
    marginHorizontal: Spaces.medium,
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: Spaces.medium,
  },
  firstHighscoreRow: {
    borderTopWidth: 1,
  },
  highscoreRow: {
    flexDirection: 'row',
    paddingVertical: Spaces.medium,
    borderColor: Colors.borderBlue,
    borderBottomWidth: 1,
    paddingHorizontal: Spaces.small,
  },
  highscoreText: {
    color: Colors.white,
  },
  highscorePlace: {
    flexBasis: 30,
    flexShrink: 0,
    flexGrow: 0,
    textAlign: 'right',
  },
  highscoreName: {
    flexGrow: 1,
    flexShrink: 1,
    paddingLeft: Spaces.normal,
  },
  highscoreScore: {
    flexShrink: 1,
    flexGrow: 0,
    textAlign: 'right',
  },
})
