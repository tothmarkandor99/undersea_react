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
} from '../store/army/army.actions'
import {showMessage} from 'react-native-flash-message'
import Loading from '../components/loading'

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
          return (
            <ArmyBox
              unit={item}
              onDecrement={() => {
                dispatch(decrementArmyCount(item))
              }}
              onIncrement={() => {
                dispatch(incrementArmyCount(item))
              }}
            />
          )
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
    backgroundColor: '#03255F',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  text: {
    color: 'white',
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
