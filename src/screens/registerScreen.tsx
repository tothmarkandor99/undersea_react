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
import FancyButton from '../components/fancyButton'
import {Spaces} from '../constants/spaces'
import {useDispatch} from 'react-redux'
import {BypassLogin} from '../store/user/user.actions'
import { Strings } from '../constants/strings'
import { Fonts } from '../constants/fonts'
import { Colors }from '../constants/colors'

interface LoginScreenProps {
  navigation: StackNavigationProp<any>
}

export default RegisterScreen
function RegisterScreen({navigation}: LoginScreenProps) {
  const dispatch = useDispatch()

  return (
    <ImageBackground
      source={require('../../assets/img/signin_bg.png')}
      style={styles.backgroundContainer}>
      <Text style={styles.loginBigText}>{Strings.undersea}</Text>
      <View style={styles.whiteArea}>
        <Text style={styles.loginMediumText}>{Strings.register}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.loginField}
            placeholder={Strings.username}
            placeholderTextColor="#1C3E76"
          />
          <TextInput
            style={styles.loginField}
            placeholder={Strings.password}
            placeholderTextColor="#1C3E76"
          />
          <TextInput
            style={styles.loginField}
            placeholder={Strings.confirmPassword}
            placeholderTextColor="#1C3E76"
          />
          <TextInput
            style={styles.loginField}
            placeholder={Strings.yourCitysName}
            placeholderTextColor="#1C3E76"
          />
        </View>
        <View style={styles.row}>
          <FancyButton
            active={true}
            onPress={() => {
              dispatch(BypassLogin())
            }}
            title={Strings.register}
          />
        </View>
        <View style={styles.bottomTextRow}>
          <Text style={styles.bottomText}>{Strings.alreadyHaveAccount_}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}>
            <Text style={[styles.bottomText, styles.bottomLink]}>{Strings.logIn}</Text>
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
    fontFamily: Fonts.baloo,
    textTransform: 'uppercase',
    color: '#9FFFF0',
    fontSize: 45, // TODO: relatív méret
    textAlign: 'center',
  },
  loginMediumText: {
    color: '#1C3E76',
    fontFamily: Fonts.baloo,
    fontSize: 30,
    textAlign: 'center',
    marginTop: Spaces.medium,
    marginBottom: Spaces.medium,
  },
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
    backgroundColor: Colors.opaqueWhite,
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
    fontFamily: Fonts.baloo,
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
