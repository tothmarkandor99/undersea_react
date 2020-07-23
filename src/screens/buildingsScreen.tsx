import {StackNavigationProp} from '@react-navigation/stack'
import React, {useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import BuildingBox from '../components/buildingBox'
import {Strings} from '../constants/strings'
import {getBuildings, postBuild} from '../store/building/building.actions'
import {showMessage} from 'react-native-flash-message'
import Loading from '../components/loading'
import {BuildRequest} from '../model/building/build.request'
import {Colors} from '../constants/colors'

interface BuildingsScreenProps {
  navigation: StackNavigationProp<any>
}

export default BuildingsScreen
function BuildingsScreen({navigation}: BuildingsScreenProps) {
  const {buildings, error, isLoading, selectedBuildingId} = useSelector(
    (state: IApplicationState) => state.app.building,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBuildings())
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
        <Text style={styles.text}>
          {Strings.only1BuildingCanBeBuiltAtTheSameTime}
        </Text>
      </View>
    )
  }

  const build = () => {
    if (selectedBuildingId) {
      dispatch(postBuild({id: selectedBuildingId} as BuildRequest))
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listBody}
        ListHeaderComponent={listHeader}
        data={buildings}
        renderItem={({item}) => {
          return <BuildingBox building={item} />
        }}
        keyExtractor={item => item.id.toString()}
      />
      <ModalButtonBar
        buttonTitle={Strings.iBuyIt}
        buttonOnPress={build}
        buttonActive={selectedBuildingId !== undefined}
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
