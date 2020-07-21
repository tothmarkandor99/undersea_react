import React, {useState, useEffect} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import FancyButton from '../components/fancyButton'
import LoginTextInput from '../components/loginTextInput'
import {Spaces} from '../constants/spaces'
import {useDispatch, useSelector} from 'react-redux'
import {login, BypassLogin} from '../store/user/user.actions'
import LogoSvg from '../../assets/img/logo'
import {Strings} from '../constants/strings'
import {Fonts} from '../constants/fonts'
import {LoginRequest} from '../model/user/login.request'
import {showMessage} from 'react-native-flash-message'
import {IApplicationState} from '../../store'
import {Colors} from '../constants/colors'
import {RFValue} from 'react-native-responsive-fontsize'
import Loading from '../components/loading'

interface LoginScreenProps {
  navigation: StackNavigationProp<any>
}

export default LoginScreen
function LoginScreen({navigation}: LoginScreenProps) {
  const {error, isLoading} = useSelector(
    (state: IApplicationState) => state.app.user,
  )

  const dispatch = useDispatch()
  const [userName, setUserName] = useState<string>('first')
  const [password, setPassword] = useState<string>('undersea') // TODO: kivenni

  useEffect(() => {
    if (error !== undefined) {
      showMessage({
        message: error,
        type: 'danger',
      })
    }
  }, [error]) // Gets triggered on registration error also

  return (
    <ImageBackground
      source={require('../../assets/img/signin_bg.png')}
      style={styles.backgroundContainer}>
      <LogoSvg fill={Colors.logoBlue} width={250} height={70} />
      <View style={styles.whiteArea}>
        <Text style={styles.loginMediumText}>{Strings.login}</Text>
        <View style={styles.inputContainer}>
          <LoginTextInput
            placeholder={Strings.username}
            onChangeText={setUserName}
          />
          <LoginTextInput
            placeholder={Strings.password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.row}>
          <FancyButton
            active={true}
            onPress={() => {
              dispatch(BypassLogin())
            }}
            title={Strings.login}
          />
        </View>
        <View style={styles.bottomTextRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen')
            }}>
            <Text style={styles.bottomText}>{Strings.register}</Text>
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
