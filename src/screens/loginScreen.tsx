import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import FancyButton from '../components/fancyButton'
import LoginTextInput from '../components/loginTextInput'
import {Spaces} from '../constants/spaces'
import {useDispatch} from 'react-redux'
import {BypassLogin} from '../store/user/user.actions'
import {Margins} from '../constants/margins'
import LogoSvg from '../../assets/img/logo'

interface LoginScreenProps {
  navigation: StackNavigationProp<any>
}

export default LoginScreen
function LoginScreen({navigation}: LoginScreenProps) {
  const dispatch = useDispatch()

  return (
    <ImageBackground
      source={require('../../assets/img/signin_bg.png')}
      style={styles.backgroundContainer}>
      <LogoSvg fill="#9FFFF0" width={250} height={70} />
      <View style={styles.whiteArea}>
        <Text style={styles.loginMediumText}>Belépés</Text>
        <View style={styles.inputContainer}>
          <LoginTextInput placeholder="Felhasználónév" />
          <LoginTextInput placeholder="Jelszó" />
        </View>
        <View style={styles.row}>
          <FancyButton
            active={true}
            onPress={() => {
              dispatch(BypassLogin())
            }}
            title="Belépés"
          />
        </View>
        <View style={styles.bottomTextRow}>
          <Text style={styles.bottomText}>Nincs még fiókod?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen')
            }}>
            <Text style={[styles.bottomText, styles.bottomLink]}>
              Regisztrálj
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  loginBigText: {
    fontFamily: 'Baloo',
    textTransform: 'uppercase',
    color: '#9FFFF0',
    fontSize: 45, // TODO: relatív méret
    textAlign: 'center',
  },
  loginMediumText: {
    color: '#1C3E76',
    fontFamily: 'Baloo',
    fontSize: 30,
    textAlign: 'center',
    marginTop: Spaces.medium,
    marginBottom: Spaces.medium,
  },
  whiteArea: {
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderRadius: Spaces.medium,
    padding: Spaces.medium,
    alignItems: 'stretch',
    marginHorizontal: Spaces.large,
  },
  inputContainer: {},
  bottomTextRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomText: {
    fontFamily: 'Baloo',
    color: '#1C3E76',
  },
  bottomLink: {
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
