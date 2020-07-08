import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import LoginButton from '../components/loginButton'
import {Spaces} from '../constants/spaces'
import {useDispatch} from 'react-redux'
import {BypassLogin} from '../store/user/user.actions'

interface LoginScreenProps {
  navigation: StackNavigationProp<any>
}

export default LoginScreen
function LoginScreen({navigation}: LoginScreenProps) {
  const dispatch = useDispatch()

  return (
    <ImageBackground
      source={require('../../assets/img/signin_bg.png')}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.loginBigText}>Undersea</Text>
      <View style={styles.whiteArea}>
        <Text style={styles.loginMediumText}>Belépés</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.loginField}
            placeholder="Felhasználónév"
            placeholderTextColor="#1C3E76"
          />
          <TextInput
            style={styles.loginField}
            placeholder="Jelszó"
            placeholderTextColor="#1C3E76"
          />
        </View>
        <View style={styles.row}>
          <LoginButton
            onPress={() => {
              dispatch(BypassLogin())
            }}
            title="Belépés"
            style={styles.loginButton}
          />
        </View>
        <View style={styles.bottomTextRow}>
          <Text style={styles.bottomText}>Nincs még fiókod?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register')
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
  loginBigText: {
    fontFamily: 'Baloo',
    textTransform: 'uppercase',
    color: '#9FFFF0',
    fontSize: Spaces.extraLarge,
  },
  loginMediumText: {
    color: '#1C3E76',
    fontFamily: 'Baloo',
    fontSize: Spaces.big,
    textAlign: 'center',
  },
  inputContainer: {},
  loginField: {
    backgroundColor: 'white',
    color: '#1C3E76',
    borderRadius: 1000,
    paddingVertical: Spaces.normal,
    paddingHorizontal: Spaces.large,
    marginBottom: Spaces.medium,
    marginHorizontal: Spaces.normal,
  },
  whiteArea: {
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderRadius: Spaces.medium,
    padding: Spaces.medium,
    alignItems: 'stretch',
  },
  loginButton: {
    flex: 0.7,
  },
  bottomTextRow: {
    flexDirection: 'row',
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
