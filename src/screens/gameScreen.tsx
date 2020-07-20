import React, {useRef, useState, useEffect} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
  LayoutChangeEvent,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Spaces} from '../constants/spaces'
import GameFooter from '../components/gameFooter'
import InfoOverlay from '../components/infoOverlay'
import {RFValue} from 'react-native-responsive-fontsize'
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
    <SafeAreaView style={styles.safeArea}>
      {/* TODO: más megoldás a status bar-ra, mert ld. github react-native-safe-area-view #5665 */}
      <View style={styles.container}>
        <GameHeader navigation={navigation} />
        <ImageBackground
          style={styles.main}
          source={require('../../assets/img/game_bg.png')}>
          <View style={styles.mainTopArea}>
            <View style={styles.whiteArea}>
              <Text style={styles.whiteAreaText}>{stats?.round}. kör</Text>
              <Text style={[styles.whiteAreaText, {marginLeft: Spaces.medium}]}>
                {stats?.scoreboardPosition}. hely
              </Text>
            </View>
          </View>
          <GameArea />
          <InfoOverlay zIndex={9} />
        </ImageBackground>
        <GameFooter
          navigation={navigation}
          style={styles.footer}
          activeIcon="home"
        />
      </View>
      <Loading animating={isLoading} />
    </SafeAreaView>
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
    backgroundColor: '#033766',
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
    color: '#1C3E76',
    fontFamily: Fonts.baloo,
  },
  footer: {
    zIndex: 10,
  },
})

export default GameScreen
