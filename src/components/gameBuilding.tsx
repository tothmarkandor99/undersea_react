import React, {useState} from 'react'
import {ImageSourcePropType, Dimensions, StyleSheet, Image} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'

const {height, width} = Dimensions.get('window')

interface GameBuildingProps {
  source: ImageSourcePropType
  buildingWidth: number
  buildingHeight: number
  zIndex?: number
  offsetX?: number
  offsetY?: number
}

export default function GameBuilding({
  source,
  buildingWidth,
  buildingHeight,
  zIndex = 0,
  offsetX = 0,
  offsetY = 0,
}: GameBuildingProps) {
  return (
    <Image
      style={[
        styles.building,
        {
          zIndex: zIndex,
          width: RFValue(buildingWidth, 568),
          height: RFValue(buildingHeight, 568),
          top: height / 2 - buildingHeight / 2 - RFValue(offsetX, 568),
          left:
            width / 2 - RFValue(buildingWidth, 568) / 2 + RFValue(offsetY, 568),
        },
      ]}
      source={source}
    />
  )
}

const styles = StyleSheet.create({
  building: {
    position: 'absolute',
  },
})
