import {StackNavigationProp} from '@react-navigation/stack'
import React, {useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {Spaces} from '../constants/spaces'
import ModalButtonBar from '../components/modalButtonBar'
import AttackUnitBox from '../components/attackUnitBox'
import {Strings} from '../constants/strings'
import {getAttackUnits, attack} from '../store/attack/attack.actions'
import Loading from '../components/loading'
import {AttackRequestItem, AttackRequest} from '../model/attack/attack.request'
import {Colors} from '../constants/colors'
import {Fonts} from '../constants/fonts'

interface AttackUnitsScreenProps {
  navigation: StackNavigationProp<any>
}

export default function AttackUnitsScreen({
  navigation,
}: AttackUnitsScreenProps) {
  const {
    attackUnits,
    error,
    isLoading,
    selectedTargetId,
    selectedUnitsCount,
  } = useSelector((state: IApplicationState) => state.app.attack)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAttackUnits())
  }, [dispatch])

  const listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={[styles.text, styles.upperText]}>{Strings._2ndStep}</Text>
        <Text style={styles.text}>{Strings.selectWhoYouSendToAttack}</Text>
      </View>
    )
  }

  const tryAttack = () => {
    if (selectedTargetId) {
      let selectedUnits: AttackRequestItem[] = []
      attackUnits.forEach(item => {
        if (item.count > 0) {
          selectedUnits.push({
            id: item.id,
            sendCount: item.count,
          } as AttackRequestItem)
        }
      })

      dispatch(
        attack({
          defenderUserId: selectedTargetId,
          attackingUnits: selectedUnits,
        } as AttackRequest),
      )
    }
  }

  const renderEmptyList = () => {
    if (isLoading) {
      return <></>
    }
    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>
          {Strings.noPlayerWithThisNameExist}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          ListEmptyComponent={renderEmptyList}
          style={styles.listBody}
          ListHeaderComponent={listHeader}
          data={attackUnits}
          renderItem={({item}) => {
            return <AttackUnitBox unit={item} />
          }}
          keyExtractor={item => item.id.toString()}
        />
        <ModalButtonBar
          buttonTitle={Strings.attack}
          buttonOnPress={tryAttack}
          buttonActive={!isLoading && selectedUnitsCount !== 0}
        />
      </View>
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
  contentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
  text: {
    color: Colors.white,
  },
  upperText: {
    fontWeight: 'bold',
    marginTop: Spaces.big,
  },
  listHeader: {
    marginBottom: Spaces.extraLarge,
  },
  listBody: {
    paddingHorizontal: Spaces.big,
  },
  emptyList: {
    alignContent: 'center',
    marginTop: Spaces.medium,
  },
  emptyListText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.openSansBold,
  },
})
