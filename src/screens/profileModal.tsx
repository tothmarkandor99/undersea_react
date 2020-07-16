import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import {Spaces} from '../constants/spaces'
import {useDispatch, useSelector} from 'react-redux'
import {BypassLogout} from '../store/user/user.actions'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import { Strings } from '../constants/strings'
import { Fonts } from '../constants/fonts'

interface ProfileModalProps {
  navigation: StackNavigationProp<any>
}

export default ProfileModal
function ProfileModal({navigation}: ProfileModalProps) {
  const dispatch = useDispatch()

  const userName = useSelector(
    (state: IApplicationState) => state.app.user.user?.name,
  )

  return (
    <View style={styles.container}>
      <HeaderWithArrow title={Strings.profile} backAction={navigation.goBack} />
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          resizeMode="contain"
          source={require('../../assets/img/Group21.png')}
        />
        <Text style={styles.profileName}>{userName}</Text>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity
          style={styles.menuItemTouchable}
          onPress={() => {
            navigation.navigate('HighscoreModal')
          }}>
          <Text style={styles.menuItemText}>{Strings.scoreboard}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity
          style={styles.menuItemTouchable}
          onPress={() => {
            dispatch(BypassLogout())
          }}>
          <Text style={[styles.menuItemText, styles.logoutText]}>
            {Strings.logout}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03255F',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {},
  profileName: {
    color: 'white',
    fontFamily: Fonts.baloo,
    textAlign: 'center',
  },
  menuItem: {
    marginHorizontal: Spaces.medium,
    borderBottomColor: '#3F68AE',
    borderBottomWidth: 2,
  },
  menuItemTouchable: {
    paddingVertical: Spaces.big,
  },
  menuItemText: {
    color: 'white',
    fontFamily: Fonts.baloo,
  },
  logoutText: {
    color: '#9FFFF0',
  },
})
