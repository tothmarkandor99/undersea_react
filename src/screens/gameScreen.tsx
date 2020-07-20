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
import {useDispatch} from 'react-redux'
import {Spaces} from '../constants/spaces'
import GameFooter from '../components/gameFooter'
import {LinearGradient} from 'expo-linear-gradient'
import {FontAwesome} from '@expo/vector-icons'
import InfoOverlay from '../components/infoOverlay'
import {RFValue} from 'react-native-responsive-fontsize'
import GameArea from '../components/gameArea'
import GameHeader from '../components/gameHeader'
import {Fonts} from '../constants/fonts'
import {Colors} from '../constants/colors'

interface GameScreenProps {
  navigation: StackNavigationProp<any>
}

const GameScreen = ({navigation}: GameScreenProps) => {
  const dispatch = useDispatch()
  const animationDuration: number = 350
  const rotateAnim = useRef(new Animated.Value(0))
  const rotateValue = rotateAnim.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })
  const [overlayHeight, setOverlayHeight] = useState(90)
  const [overlayControlHeight, setOverlayControlHeight] = useState(25)
  const slideAnim = useRef(new Animated.Value(0))
  const slideValue = slideAnim.current.interpolate({
    // TODO: érdemes lenne ezeket a komponensen belülre mozgatni
    inputRange: [0, 1],
    outputRange: [-overlayHeight + overlayControlHeight, 0],
  })

  const [bottomInfosVisible, setBottomInfosVisible] = useState(false)
  useEffect(() => {
    if (bottomInfosVisible) {
      appear()
    } else {
      disappear()
    }
  }, [bottomInfosVisible])
  const appear = () => {
    Animated.timing(rotateAnim.current, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
    Animated.timing(slideAnim.current, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
  }
  const disappear = () => {
    Animated.timing(rotateAnim.current, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
    Animated.timing(slideAnim.current, {
      toValue: 0,
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
          </View>
          <GameArea />
          <InfoOverlay
            rotateValue={rotateValue}
            slideValue={slideValue}
            zIndex={9}
            onLayout={(event: LayoutChangeEvent) =>
              setOverlayHeight(event.nativeEvent.layout.height)
            }
            onControlLayout={event => {
              setOverlayControlHeight(event.nativeEvent.layout.height)
            }}
            onControlPress={() => {
              setBottomInfosVisible(!bottomInfosVisible)
            }}
          />
        </ImageBackground>
        <GameFooter
          navigation={navigation}
          style={styles.footer}
          activeIcon="home"
        />
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
