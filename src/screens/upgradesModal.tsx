import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import UpgradeBox from '../components/upgradeBox'
import {Strings} from '../constants/strings'
import {getUpgrades} from '../store/upgrade/upgrade.actions'
import {showMessage} from 'react-native-flash-message'
import Loading from '../components/loading'
import {Colors} from '../constants/colors'

interface UpgradesModalProps {
  navigation: StackNavigationProp<any>
}

export default UpgradesModal
function UpgradesModal({navigation}: UpgradesModalProps) {
  const {upgrades, error, isLoading} = useSelector(
    (state: IApplicationState) => state.app.upgrade,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUpgrades())
  }, [dispatch])

  useEffect(() => {
    if (error !== undefined) {
      showMessage({
        message: error,
        type: 'danger',
      })
    }
  }, [error])

  const listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={[styles.text, styles.upperText]}>
          {Strings.selectWhatYouWantToBuy}
        </Text>
        <Text style={styles.text}>{Strings.upgradeDescription}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderWithArrow
        title={Strings.upgrades}
        backAction={navigation.goBack}
      />
      <FlatList
        style={styles.listBody}
        ListHeaderComponent={listHeader}
        data={upgrades}
        renderItem={({item}) => {
          return <UpgradeBox upgrade={item} />
        }}
        keyExtractor={item => item.id.toString()}
      />
      <ModalButtonBar buttonTitle={Strings.iBuyIt} buttonOnPress={() => {}} />
      <Loading animating={isLoading} />
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
  text: {
    color: Colors.white,
  },
  upperText: {
    fontWeight: 'bold',
    marginTop: Spaces.big,
  },
  listHeader: {
    marginBottom: Spaces.giant,
  },
  listBody: {
    paddingHorizontal: Spaces.big,
  },
})
