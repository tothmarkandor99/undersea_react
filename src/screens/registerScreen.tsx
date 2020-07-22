import React, {useState} from 'react'
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
import {useDispatch, useSelector} from 'react-redux'
import {register} from '../store/user/user.actions'
import {Strings} from '../constants/strings'
import {Fonts} from '../constants/fonts'
import {Colors} from '../constants/colors'
import {RegisterRequest} from '../model/user/register.request'
import LogoSvg from '../../assets/img/logo'
import LoginTextInput from '../components/loginTextInput'
import {RFValue} from 'react-native-responsive-fontsize'
import {IApplicationState} from '../../store'
import Loading from '../components/loading'
import {showMessage} from 'react-native-flash-message'

interface RegisterScreenProps {
  navigation: StackNavigationProp<any>
}

export default RegisterScreen
function RegisterScreen({navigation}: RegisterScreenProps) {
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state: IApplicationState) => state.app.user)

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('') // TODO: validáció
  const [coutryName, setCountryName] = useState('')

  const tryRegister = () => {
    if (password.length < 4) {
      showMessage({
        message: Strings.passwordMustBeAtLeast4CharLong,
        type: 'danger',
      })
    } else if (password !== confirmPassword) {
      showMessage({
        message: Strings.thePasswordsShouldMatch,
        type: 'danger',
      })
    } else {
      dispatch(
        register({
          userName: userName,
          password: password,
          countryName: coutryName,
        } as RegisterRequest),
      )
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/img/signin_bg.png')}
      style={styles.backgroundContainer}>
      <LogoSvg fill={Colors.logoBlue} width={250} height={70} />
      <View style={styles.whiteArea}>
        <Text style={styles.loginMediumText}>{Strings.register}</Text>
        <View style={styles.inputContainer}>
          <LoginTextInput
            placeholder={Strings.username}
            onChangeText={setUserName}
          />
          <LoginTextInput
            placeholder={Strings.password}
            onChangeText={setPassword}
          />
          <LoginTextInput
            placeholder={Strings.confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <LoginTextInput
            placeholder={Strings.yourCityName}
            onChangeText={setCountryName}
          />
        </View>
        <View style={styles.row}>
          <FancyButton
            active={true}
            onPress={tryRegister}
            title={Strings.register}
          />
        </View>
        <View style={styles.bottomTextRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen')
            }}>
            <Text style={styles.bottomText}>{Strings.login}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Loading animating={isLoading} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  loginMediumText: {
    color: Colors.mediumDarkBlue,
    fontFamily: Fonts.baloo,
    fontSize: RFValue(20, 568),
    textAlign: 'center',
    marginTop: Spaces.medium,
    marginBottom: Spaces.medium,
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
    marginTop: Spaces.medium,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomText: {
    fontFamily: Fonts.baloo,
    color: Colors.darkBlue,
    fontSize: RFValue(16, 568),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
