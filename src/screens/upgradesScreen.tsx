import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import UpgradeBox from '../components/upgradeBox'
import {Strings} from '../constants/strings'
import {getUpgrades, postBuyUpgrade} from '../store/upgrade/upgrade.actions'
import {showMessage} from 'react-native-flash-message'
import Loading from '../components/loading'
import {Colors} from '../constants/colors'

interface UpgradesScreenProps {
  navigation: StackNavigationProp<any>
}

export default UpgradesScreen
function UpgradesScreen({navigation}: UpgradesScreenProps) {
  const {upgrades, error, isLoading, selectedId} = useSelector(
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

  const [buttonBarHeight, setButtonBarHeight] = useState<number>(0)

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
      <FlatList
        style={styles.listBody}
        ListHeaderComponent={listHeader}
        data={[...upgrades, null]}
        renderItem={({item}) => {
          if (item !== null) {
            return <UpgradeBox upgrade={item} />
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
        buttonOnPress={() => {
          if (selectedId) {
            dispatch(postBuyUpgrade(selectedId))
          }
        }}
        buttonActive={selectedId !== undefined}
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
