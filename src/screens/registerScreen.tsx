import { View, Button, Text } from "react-native";
import React from 'react';

export default RegisterScreen
function RegisterScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }