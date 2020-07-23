import React, {useEffect} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import {Spaces} from '../constants/spaces'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {Strings} from '../constants/strings'
import {Fonts} from '../constants/fonts'
import {Colors} from '../constants/colors'
import {logout} from '../store/user/user.actions'
import * as SecureStore from 'expo-secure-store'

interface ProfileModalProps {
  navigation: StackNavigationProp<any>
}

export default ProfileModal
function ProfileModal({navigation}: ProfileModalProps) {
  const dispatch = useDispatch()

  const userName = useSelector(
    (state: IApplicationState) => state.app.stats.stats?.countryName,
  )
  const loggedIn = useSelector(
    (state: IApplicationState) => state.app.user.loggedIn,
  )

  useEffect(() => {
    if (!loggedIn) {
      SecureStore.deleteItemAsync('access_token')
      SecureStore.deleteItemAsync('refresh_token')
      console.log('Tokens removed')
    }
  }, [loggedIn])

  return (
    <View style={styles.container}>
      <View style={[styles.menuItem, styles.profileInfo]}>
        <Image
          style={styles.profileImage}
          resizeMode="contain"
          source={require('../../assets/img/avatar.png')}
        />
        <Text style={styles.profileName}>{userName}</Text>
      </View>
      <View style={[styles.menuItem, styles.menuItemContent]}>
        <Text style={styles.menuItemTextBold}>{Strings.myCityName}</Text>
        <Text style={styles.menuItemText}>{userName}</Text>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity
          style={styles.menuItemContent}
          onPress={() => {
            dispatch(logout())
          }}>
          <Text style={[styles.menuItemTextFunky, styles.logoutText]}>
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
    backgroundColor: Colors.backgroundDarkBlue,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: Spaces.large,
  },
  profileImage: {
    marginBottom: Spaces.medium,
    width: 80,
    height: 80,
  },
  profileName: {
    color: Colors.white,
    fontFamily: Fonts.baloo,
    textAlign: 'center',
  },
  menuItem: {
    marginHorizontal: Spaces.medium,
    borderBottomColor: Colors.borderBlue,
    borderBottomWidth: 1,
  },
  menuItemContent: {
    paddingVertical: Spaces.big,
  },
  menuItemText: {
    color: Colors.white,
    fontFamily: Fonts.openSansRegular,
  },
  menuItemTextBold: {
    color: Colors.white,
    fontFamily: Fonts.openSansBold,
  },
  menuItemTextFunky: {
    color: Colors.white,
    fontFamily: Fonts.baloo,
  },
  logoutText: {
    color: Colors.logoBlue,
  },
})
