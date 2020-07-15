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
} from 'react-native'
import {useDispatch} from 'react-redux'
import {Spaces} from '../constants/spaces'
import GameFooter from '../components/gameFooter'
import {LinearGradient} from 'expo-linear-gradient'
import {FontAwesome} from '@expo/vector-icons'
import InfoOverlay from '../components/infoOverlay'
import {RFValue} from 'react-native-responsive-fontsize'
import GameArea from '../components/gameArea'
import GameHeader from '../components/gameHeader'

interface GameScreenProps {
  navigation: StackNavigationProp<any>
}

const GameScreen = ({navigation}: GameScreenProps) => {
  const dispatch = useDispatch()
  const animationDuration: number = 350
  const fadeAnim = useRef(new Animated.Value(0))
  const slideAnim = useRef(new Animated.Value(-50))
  const [starRadius, setStarRadius] = useState(10)

  const [bottomInfosVisible, setBottomInfosVisible] = useState(false)
  useEffect(() => {
    if (bottomInfosVisible) {
      appear()
    } else {
      disappear()
    }
  }, [bottomInfosVisible])
  const appear = () => {
    Animated.timing(fadeAnim.current, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
    Animated.timing(slideAnim.current, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
  }
  const disappear = () => {
    Animated.timing(fadeAnim.current, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
    Animated.timing(slideAnim.current, {
      toValue: -50,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
  }
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
              <Text style={styles.whiteAreaText}>4. kör</Text>
              <Text style={[styles.whiteAreaText, {marginLeft: Spaces.medium}]}>
                23. hely
              </Text>
            </View>
            <TouchableOpacity
              style={styles.starButtonContainer}
              onPress={() => {
                setBottomInfosVisible(!bottomInfosVisible)
              }}>
              <LinearGradient
                style={[styles.starButton, {borderRadius: starRadius}]}
                colors={['#9FFFF0', '#6BEEE9', '#0FCFDE']}
                start={[0.5, 0]}
                end={[0.5, 1]}
                onLayout={event => {
                  setStarRadius(event.nativeEvent.layout.height / 2)
                }}>
                <FontAwesome name="star" style={styles.star} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <GameArea />
          <InfoOverlay fadeAnim={fadeAnim} slideAnim={slideAnim} zIndex={9} />
        </ImageBackground>
        <GameFooter navigation={navigation} style={styles.footer} />
      </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderRadius: Spaces.medium,
    flexDirection: 'row',
    paddingHorizontal: Spaces.medium,
    paddingVertical: Spaces.normal,
  },
  whiteAreaText: {
    color: '#1C3E76',
    fontFamily: 'Baloo',
  },
  starButtonContainer: {
    position: 'absolute',
    right: Spaces.medium,
  },
  starButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    fontSize: 18,
  },
  footer: {
    zIndex: 10,
  },
})

export default GameScreen
