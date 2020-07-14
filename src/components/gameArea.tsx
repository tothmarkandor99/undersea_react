import React from 'react'
import {View, StyleSheet} from 'react-native'
import GameBuilding from './gameBuilding'

export default function GameArea() {
  return (
    <View style={styles.gameArea}>
      <GameBuilding
        source={require('../../assets/img/buildings/undersea_game-02.png')}
        buildingWidth={76}
        buildingHeight={87}
        zIndex={3}
        offsetX={-40}
        offsetY={-65}
      />
      <GameBuilding
        source={require('../../assets/img/buildings/undersea_game-03.png')}
        buildingWidth={108}
        buildingHeight={194}
        zIndex={1}
        offsetX={65}
        offsetY={27}
      />
      <GameBuilding
        source={require('../../assets/img/buildings/undersea_game-05.png')}
        buildingWidth={106}
        buildingHeight={89}
        zIndex={3}
        offsetX={-40}
        offsetY={40}
      />
      <GameBuilding
        source={require('../../assets/img/buildings/undersea_game-07.png')}
        buildingWidth={120}
        buildingHeight={124}
        zIndex={2}
        offsetX={7}
        offsetY={-23}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  gameArea: {},
})
