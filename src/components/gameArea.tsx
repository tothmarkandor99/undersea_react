import React from 'react'
import {View, StyleSheet} from 'react-native'
import GameBuilding from './gameBuilding'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'

export default function GameArea() {
  const {stats} = useSelector((state: IApplicationState) => state.app.stats)

  return (
    <View style={styles.gameArea}>
      {stats?.structureStats.coralWall && (
        <GameBuilding
          source={require('../../assets/img/buildings/undersea_game-02.png')}
          buildingWidth={76}
          buildingHeight={87}
          zIndex={3}
          offsetX={-40}
          offsetY={-65}
        />
      )}
      {stats?.structureStats.sonarCannon && (
        <GameBuilding
          source={require('../../assets/img/buildings/undersea_game-03.png')}
          buildingWidth={108}
          buildingHeight={194}
          zIndex={1}
          offsetX={65}
          offsetY={27}
        />
      )}
      {stats?.structureStats.flowManager && (
        <GameBuilding
          source={require('../../assets/img/buildings/undersea_game-05.png')}
          buildingWidth={106}
          buildingHeight={89}
          zIndex={3}
          offsetX={-40}
          offsetY={40}
        />
      )}
      {stats?.structureStats.reefCastle && (
        <GameBuilding
          source={require('../../assets/img/buildings/undersea_game-07.png')}
          buildingWidth={120}
          buildingHeight={124}
          zIndex={2}
          offsetX={7}
          offsetY={-23}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  gameArea: {},
})
