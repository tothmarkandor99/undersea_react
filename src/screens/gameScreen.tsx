import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useDispatch} from 'react-redux'
import {BypassLogout} from '../store/user/user.actions'
import {Spaces} from '../constants/spaces'

interface GameScreenProps {
  navigation: StackNavigationProp<any>
}

const GameScreen = ({navigation}: GameScreenProps) => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.safeArea}>
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
            <Text>Top bar</Text>
          </View>
          <View style={styles.mainInfoOverlay}>
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
          </View>
        </ImageBackground>
        <LinearGradient
          style={styles.footer}
          colors={['#9FFFF0', '#6BEEE9', '#0FCFDE']}
          start={[0.5, 0]}
          end={[0.5, 1]}>
          <TouchableOpacity style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="contain"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="contain"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="contain"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="contain"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="contain"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </TouchableOpacity>
        </LinearGradient>
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
    backgroundColor: 'red',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainTopArea: {},
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
  footer: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonImage: {
    height: 50, // TODO: flexbox a fix méret helyett
  },
  footerButtonText: {
    color: '#367987',
    fontFamily: 'Baloo',
  },
})

export default GameScreen
