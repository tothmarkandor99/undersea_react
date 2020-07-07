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
        <Text>Regisztráció</Text>
        <TextInput placeholder="Felhasználónév" />
        <TextInput placeholder="Jelszó" />
        <TextInput placeholder="Jelszó megerősítése" />
        <TextInput placeholder="A városod neve, amit építesz" />
        <Button title="Regisztráció" onPress={() => {}} />
        <Text>
          Már van fiókod?
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Register')
            }}>
            <Text>Lépj be</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  )
}
