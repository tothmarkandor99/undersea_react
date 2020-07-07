import {
  View,
  Button,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import {useFonts} from '@use-expo/font'
import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {Margins} from '../constants/margins'
import {Spaces} from '../constants/spaces'
import {LinearGradient} from 'expo-linear-gradient'

interface LoginScreenProps {
  navigation: StackNavigationProp<any>
}

export default LoginScreen
function LoginScreen({navigation}: LoginScreenProps) {
  useFonts({Baloo: require('../../assets/fonts/Baloo-Regular.ttf')})

  return (
    <ImageBackground
      source={require('../../assets/img/signin_bg.png')}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.loginBigText}>Undersea</Text>
      <View style={styles.whiteArea}>
        <Text style={styles.loginMediumText}>Belépés</Text>
        <View>
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
        <TouchableWithoutFeedback onPress={() => {}}>
          <LinearGradient
            colors={['#9FFFF0', '#6BEEE9', '#0FCFDE']}
            start={[1, 0.3]}
            end={[0, 0.7]}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Belépés</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <Text>
          Nincs még fiókod?
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Register')
            }}>
            <Text>Regisztrálj</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  loginBigText: {
    fontFamily: 'Baloo',
    textTransform: 'capitalize',
    color: '#9FFFF0',
    fontSize: Spaces.extraLarge,
  },
  loginMediumText: {
    color: '#1C3E76',
    fontFamily: 'Baloo',
    fontSize: Spaces.big,
  },
  loginField: {
    backgroundColor: 'white',
    color: '#1C3E76',
    borderRadius: 1000,
    paddingVertical: Spaces.normal,
    paddingHorizontal: Spaces.large,
    marginBottom: Spaces.medium,
  },
  whiteArea: {
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderRadius: Spaces.medium,
    padding: Spaces.medium,
  },
  loginButton: {
    borderRadius: 1000,
    overflow: 'hidden',
  },
  loginButtonText: {
    textAlign: 'center',
  },
})
