import {
  View,
  Button,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from 'react-native'
import {useFonts} from '@use-expo/font'
import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

interface LoginScreenProps {
  navigation: StackNavigationProp<any>
}

export default LoginScreen
function LoginScreen({navigation}: LoginScreenProps) {
  useFonts({Baloo: require('../../assets/fonts/Baloo-Regular.ttf')})

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.loginBigText}>Undersea</Text>
      <View>
        <Text>Belépés</Text>
        <TextInput placeholder="Felhasználónév" />
        <TextInput placeholder="Jelszó" />
        <Button title="Belépés" onPress={() => {}} />
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
    </View>
  )
}

const styles = StyleSheet.create({
  loginBigText: {
    fontFamily: 'Baloo',
    textTransform: 'capitalize',
    color: '#9FFFF0',
    fontSize: 37,
  },
})
