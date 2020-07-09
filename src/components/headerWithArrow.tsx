import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import StatusBar from './statusBar'
import {Spaces} from '../constants/spaces'

interface HeaderWithArrowProps {
  title: string
  backAction: (event: GestureResponderEvent) => void
}

const HeaderWithArrow = ({title, backAction}: HeaderWithArrowProps) => {
  return (
    <View>
      <StatusBar backgroundColor="#1C3E76" />
      <View style={styles.header}>
        <View style={styles.headerItems}>
          <TouchableOpacity style={styles.backButton} onPress={backAction}>
            <Ionicons
              name="md-arrow-back"
              size={RFValue(30, 740)}
              color="white"
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: RFValue(60, 640),
    backgroundColor: '#1C3E76',
  },
  headerItems: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButton: {
    flex: 0.1,
    paddingHorizontal: Spaces.large,
  },
  titleText: {
    textAlign: 'center',
    color: 'white',
    fontSize: RFValue(24, 740),
    fontWeight: 'bold',
  },
})
export default HeaderWithArrow
