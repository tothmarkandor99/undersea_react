import React from 'react'
import {
  StyleSheet,
  Animated,
  View,
  Image,
  Text,
  GestureResponderEvent,
  TouchableWithoutFeedback,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native'
import {Spaces} from '../constants/spaces'
import {Colors} from '../constants/colors'

interface InfoOverlayProps {
  rotateValue: Animated.AnimatedInterpolation
  slideValue: Animated.AnimatedInterpolation
  zIndex?: number
  onControlPress?: ((event: GestureResponderEvent) => void) | undefined
  onLayout?:
    | Animated.WithAnimatedValue<
        ((event: LayoutChangeEvent) => void) | undefined
      >
    | undefined
  onControlLayout?: ((event: LayoutChangeEvent) => void) | undefined
}

export default function InfoOverlay({
  rotateValue,
  slideValue,
  zIndex = 0,
  onControlPress,
  onLayout,
  onControlLayout,
}: InfoOverlayProps) {
  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        styles.mainInfoOverlay,
        {
          position: 'absolute',
          bottom: slideValue,
          zIndex: zIndex,
        },
      ]}>
      <View style={styles.controlBar} onLayout={onControlLayout}>
        <TouchableOpacity
          onPress={onControlPress}
          style={styles.controlBarTouchable}>
          <Animated.Image
            source={require('../../assets/img/caret_up.png')}
            style={{transform: [{rotate: rotateValue}]}}
          />
        </TouchableOpacity>
      </View>
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
    left: 0,
    right: 0,
  },
  controlBar: {
    backgroundColor: Colors.white,
    marginBottom: Spaces.medium,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  controlBarTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
