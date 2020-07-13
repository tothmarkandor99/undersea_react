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
import StatusBar from '../components/statusBar'
import GameFooter from '../components/gameFooter'
import {LinearGradient} from 'expo-linear-gradient'
import {FontAwesome} from '@expo/vector-icons'

interface GameScreenProps {
  navigation: StackNavigationProp<any>
}

const GameScreen = ({navigation}: GameScreenProps) => {
  const dispatch = useDispatch()
  const animationDuration: number = 350
  const fadeAnim = useRef(new Animated.Value(0)).current
  const slideAnim = useRef(new Animated.Value(-50)).current
  const [bottomInfosVisible, setBottomInfosVisible] = useState(false)
  useEffect(() => {
    if (bottomInfosVisible) {
      appear()
    } else {
      disappear()
    }
  }, [bottomInfosVisible])
  const appear = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
  }
  const disappear = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
    Animated.timing(slideAnim, {
      toValue: -50,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1C3E76" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Undersea</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileModal')
            }}>
            <Image
              style={styles.avatar}
              resizeMode="contain"
              source={require('../../assets/img/avatar.png')}
            />
          </TouchableOpacity>
        </View>
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
                style={styles.starButton}
                colors={['#9FFFF0', '#6BEEE9', '#0FCFDE']}
                start={[0.5, 0]}
                end={[0.5, 1]}>
                <FontAwesome name="star" style={styles.star} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Animated.View
            style={[
              styles.mainInfoOverlay,
              {
                opacity: fadeAnim,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: slideAnim,
              },
            ]}>
            <View style={styles.infoOverlayRow}>
              <View style={styles.infoOverlayItem}>
                <Image
                  style={styles.infoOverlayImage}
                  resizeMode="contain"
                  source={require('../../assets/img/avatar.png')}
                />
                <Text style={styles.infoOverlayText}>Épületek</Text>
              </View>
              <View style={styles.infoOverlayItem}>
                <Image
                  style={styles.infoOverlayImage}
                  resizeMode="contain"
                  source={require('../../assets/img/avatar.png')}
                />
                <Text style={styles.infoOverlayText}>Épületek</Text>
              </View>
              <View style={styles.infoOverlayItem}>
                <Image
                  style={styles.infoOverlayImage}
                  resizeMode="contain"
                  source={require('../../assets/img/avatar.png')}
                />
                <Text style={styles.infoOverlayText}>Épületek</Text>
              </View>
            </View>
            <View style={styles.infoOverlayRow}>
              <View style={styles.infoOverlayItem}>
                <Image
                  style={styles.infoOverlayImage}
                  resizeMode="contain"
                  source={require('../../assets/img/avatar.png')}
                />
                <Text style={styles.infoOverlayText}>Épületek</Text>
              </View>
              <View style={styles.infoOverlayItem}>
                <Image
                  style={styles.infoOverlayImage}
                  resizeMode="contain"
                  source={require('../../assets/img/avatar.png')}
                />
                <Text style={styles.infoOverlayText}>Épületek</Text>
              </View>
              <View style={styles.infoOverlayItem}>
                <Image
                  style={styles.infoOverlayImage}
                  resizeMode="contain"
                  source={require('../../assets/img/avatar.png')}
                />
                <Text style={styles.infoOverlayText}>Épületek</Text>
              </View>
              <View style={styles.infoOverlayItem}>
                <Image
                  style={styles.infoOverlayImage}
                  resizeMode="contain"
                  source={require('../../assets/img/avatar.png')}
                />
                <Text style={styles.infoOverlayText}>Épületek</Text>
              </View>
            </View>
          </Animated.View>
        </ImageBackground>
        <GameFooter navigation={navigation} style={{zIndex: 1}} />
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
  header: {
    backgroundColor: '#1C3E76',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Baloo',
    color: '#9FFFF0',
    textTransform: 'uppercase',
  },
  avatar: {},
  main: {
    backgroundColor: '#033766',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainTopArea: {
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
    borderRadius: 1000,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    fontSize: 18,
  },
  mainInfoOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    flexDirection: 'column',
  },
  infoOverlayRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Spaces.medium,
  },
  infoOverlayItem: {
    flex: 0.2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoOverlayImage: {},
  infoOverlayText: {
    fontFamily: 'Baloo',
    color: '#1C3E76',
  },
})

export default GameScreen
