import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import ArmyBox from '../components/armyBox'
import {Strings} from '../constants/strings'
import {getArmy, postBuyArmy} from '../store/army/army.actions'
import {showMessage} from 'react-native-flash-message'
import Loading from '../components/loading'
import {
  PurchaseUnitRequest,
  PurchaseUnitRequestItem,
} from '../model/army/purchaseUnit.request'
import {Colors} from '../constants/colors'

interface ArmyScreenProps {
  navigation: StackNavigationProp<any>
}

export default ArmyScreen
function ArmyScreen({navigation}: ArmyScreenProps) {
  const {purchasableUnits, error, isLoading, selectedUnitCount} = useSelector(
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

  const [buttonBarHeight, setButtonBarHeight] = useState<number>(0)

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
      <FlatList
        style={styles.listBody}
        ListHeaderComponent={listHeader}
        data={[...purchasableUnits, null]}
        renderItem={({item}) => {
          if (item !== null) {
            return <ArmyBox unit={item} />
          } else {
            return <View style={{height: buttonBarHeight}}></View>
          }
        }}
        keyExtractor={item =>
          item === null ? 'placeholder' : item.id.toString()
        }
      />
      <ModalButtonBar
        onLayout={event => {
          setButtonBarHeight(event.nativeEvent.layout.height)
        }}
        buttonTitle={Strings.iBuyIt}
        buttonOnPress={buyUnits}
        buttonActive={selectedUnitCount !== 0}
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
