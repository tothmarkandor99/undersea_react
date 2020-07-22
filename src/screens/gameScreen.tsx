import React, {useEffect} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Spaces} from '../constants/spaces'
import InfoOverlay from '../components/infoOverlay'
import GameArea from '../components/gameArea'
import GameHeader from '../components/gameHeader'
import {Fonts} from '../constants/fonts'
import {Colors} from '../constants/colors'
import {IApplicationState} from '../../store'
import {getStats} from '../store/stats/stats.actions'
import Loading from '../components/loading'

interface GameScreenProps {
  navigation: StackNavigationProp<any>
}

const GameScreen = ({navigation}: GameScreenProps) => {
  const {stats, error, isLoading} = useSelector(
    (state: IApplicationState) => state.app.stats,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStats())
  }, [dispatch])

  return (
    <View style={styles.container}>
      {/* TODO: status bar */}
      <GameHeader navigation={navigation} />
      <ImageBackground
        style={styles.main}
        source={require('../../assets/img/game_bg.png')}>
        <View style={styles.mainTopArea}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HighscoreModal')
            }}>
            <View style={styles.whiteArea}>
              <Text style={styles.whiteAreaText}>{stats?.round}. kör</Text>
              <Text style={[styles.whiteAreaText, {marginLeft: Spaces.medium}]}>
                {stats?.scoreboardPosition}. hely
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <GameArea />
        <InfoOverlay zIndex={9} />
      </ImageBackground>
      <Loading animating={isLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  main: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainTopArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    marginTop: Spaces.normal,
    justifyContent: 'center',
  },
  whiteArea: {
    backgroundColor: Colors.white,
    elevation: 8,
    borderRadius: Spaces.medium,
    flexDirection: 'row',
    paddingHorizontal: Spaces.medium,
    paddingVertical: Spaces.normal,
  },
  whiteAreaText: {
    color: Colors.mediumDarkBlue,
    fontFamily: Fonts.baloo,
  },
  footer: {
    zIndex: 10,
  },
})

export default GameScreen
