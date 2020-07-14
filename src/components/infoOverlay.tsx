import React from 'react'
import {StyleSheet, Animated, View, Image, Text} from 'react-native'
import {Spaces} from '../constants/spaces'

interface InfoOverlayProps {
  fadeAnim: React.MutableRefObject<Animated.Value>
  slideAnim: React.MutableRefObject<Animated.Value>
  zIndex?: number
}

export default function InfoOverlay({
  fadeAnim,
  slideAnim,
  zIndex = 0,
}: InfoOverlayProps) {
  return (
    <Animated.View
      style={[
        styles.mainInfoOverlay,
        {
          opacity: fadeAnim.current,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: slideAnim.current,
          zIndex: zIndex,
        },
      ]}>
      <View style={styles.infoOverlayRow}>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={require('../../assets/img/stats/Group132.png')}
          />
          <Text style={styles.infoOverlayText}>0</Text>
        </View>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={require('../../assets/img/stats/Group131.png')}
          />
          <Text style={styles.infoOverlayText}>5</Text>
        </View>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={require('../../assets/img/stats/Group130.png')}
          />
          <Text style={styles.infoOverlayText}>13</Text>
        </View>
      </View>
      <View style={styles.infoOverlayRow}>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={require('../../assets/img/stats/Group129.png')}
          />
          <Text style={styles.infoOverlayText}>230</Text>
          <Text style={styles.infoOverlayText}>12/kör</Text>
        </View>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={require('../../assets/img/stats/Group128.png')}
          />
          <Text style={styles.infoOverlayText}>230</Text>
          <Text style={styles.infoOverlayText}>12/kör</Text>
        </View>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={require('../../assets/img/stats/Group125.png')}
          />
          <Text style={styles.infoOverlayText}>1</Text>
        </View>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={require('../../assets/img/stats/Group126.png')}
          />
          <Text style={styles.infoOverlayText}>0</Text>
        </View>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  mainInfoOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    flexDirection: 'column',
    paddingTop: Spaces.medium,
  },
  infoOverlayRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Spaces.normal,
  },
  infoOverlayItem: {
    flex: 0.2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoOverlayImage: {
    width: 45,
    height: 45,
  },
  infoOverlayText: {
    fontFamily: 'Baloo',
    color: '#1C3E76',
  },
})
