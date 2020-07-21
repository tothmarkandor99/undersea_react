import React, {useEffect} from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  AsyncStorage,
} from 'react-native'
import {Spaces} from '../constants/spaces'
import {useDispatch, useSelector} from 'react-redux'
import {BypassLogout} from '../store/user/user.actions'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Strings} from '../constants/strings'
import {Fonts} from '../constants/fonts'

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
    AsyncStorage.removeItem('access_token')
    AsyncStorage.removeItem('refresh_token')
    console.log('Tokens removed')
  }, [loggedIn])

  return (
    <View style={styles.container}>
      <HeaderWithArrow title={Strings.profile} backAction={navigation.goBack} />
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
            dispatch(BypassLogout())
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
    backgroundColor: '#03255F',
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
    color: 'white',
    fontFamily: Fonts.baloo,
    textAlign: 'center',
  },
  menuItem: {
    marginHorizontal: Spaces.medium,
    borderBottomColor: '#3F68AE',
    borderBottomWidth: 1,
  },
  menuItemContent: {
    paddingVertical: Spaces.big,
  },
  menuItemText: {
    color: 'white',
    fontFamily: Fonts.openSansRegular,
  },
  menuItemTextBold: {
    color: 'white',
    fontFamily: Fonts.openSansBold,
  },
  menuItemTextFunky: {
    color: 'white',
    fontFamily: Fonts.baloo,
  },
  logoutText: {
    color: '#9FFFF0',
  },
})
