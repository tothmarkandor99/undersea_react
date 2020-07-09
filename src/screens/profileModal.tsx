import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  YellowBox,
} from 'react-native'
import LoginButton from '../components/loginButton'
import {Spaces} from '../constants/spaces'
import {useDispatch} from 'react-redux'
import {BypassLogin} from '../store/user/user.actions'
import {Margins} from '../constants/margins'

interface ProfileModalProps {
  navigation: StackNavigationProp<any>
}

export default ProfileModal
function ProfileModal({navigation}: ProfileModalProps) {
  const dispatch = useDispatch()

  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
})
