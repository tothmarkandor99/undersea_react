import {
  View,
  Button,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native'
import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

interface LoginScreenProps {
  navigation: StackNavigationProp<any>
}

export default LoginScreen
function LoginScreen({navigation}: LoginScreenProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Undersea</Text>
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
