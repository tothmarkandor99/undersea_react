import { View, Button, Text } from "react-native";
import React from 'react';

export default LoginScreen
function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    );
  }