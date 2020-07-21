import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, TextInput, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import HeaderWithArrow from '../components/headerWithArrow'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import ArmyBox from '../components/armyBox'
import {Strings} from '../constants/strings'
import {
  getArmy,
  incrementArmyCount,
  decrementArmyCount,
  postBuyArmy,
} from '../store/army/army.actions'
import {showMessage} from 'react-native-flash-message'
import Loading from '../components/loading'
import {disableExpoCliLogging} from 'expo/build/logs/Logs'
import {
  PurchaseUnitRequest,
  PurchaseUnitRequestItem,
} from '../model/army/purchaseUnit.request'
import {Colors} from '../constants/colors'

interface ArmyModalProps {
  navigation: StackNavigationProp<any>
}

export default ArmyModal
function ArmyModal({navigation}: ArmyModalProps) {
  const {purchasableUnits, error, isLoading} = useSelector(
    (state: IApplicationState) => state.app.army,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArmy())
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
          {Strings.selectWhatYouWant}
        </Text>
      </View>
    )
  }

  const buyUnits = () => {
    let units: PurchaseUnitRequest = []
    purchasableUnits.forEach(item => {
      if (item.viewCount > 0) {
        units.push({
          typeId: item.id,
          count: item.viewCount,
        } as PurchaseUnitRequestItem)
      }
    })
    dispatch(postBuyArmy(units))
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
        data={purchasableUnits}
        renderItem={({item}) => {
          return <ArmyBox unit={item} />
        }}
        keyExtractor={item => item.id.toString()}
      />
      <ModalButtonBar
        buttonTitle={Strings.iBuyIt}
        buttonOnPress={buyUnits}
        buttonActive={true}
      />
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
