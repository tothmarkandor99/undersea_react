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
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {statsReducer} from '../store/stats/stats.reducer'

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
  const {stats, error, isLoading} = useSelector(
    (state: IApplicationState) => state.app.stats,
  )

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
        {stats?.unitStats.map(item => (
          <View style={styles.infoOverlayItem}>
            <Image
              style={styles.infoOverlayImage}
              resizeMode="contain"
              source={{uri: item.imageUrl}}
            />
            <Text style={styles.infoOverlayText}>{item.availableCount}</Text>
          </View>
        ))}
      </View>
      <View style={styles.infoOverlayRow}>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={{url: stats?.resourceStats.pearlPictureUrl}}
          />
          <Text style={styles.infoOverlayText}>
            {stats?.resourceStats.pearlCount}
          </Text>
          <Text style={styles.infoOverlayText}>
            {stats?.resourceStats.pearlProductionCount}/kör
          </Text>
        </View>
        <View style={styles.infoOverlayItem}>
          <Image
            style={styles.infoOverlayImage}
            resizeMode="contain"
            source={{url: stats?.resourceStats.coralPictureUrl}}
          />
          <Text style={styles.infoOverlayText}>
            {stats?.resourceStats.coralCount}
          </Text>
          <Text style={styles.infoOverlayText}>
            {stats?.resourceStats.coralProductionCount}/kör
          </Text>
        </View>
        {stats?.buildingStats.map(item => (
          <View style={styles.infoOverlayItem}>
            <Image
              style={styles.infoOverlayImage}
              resizeMode="contain"
              source={{uri: item.imageUrl}}
            />
            <Text style={styles.infoOverlayText}>{item.count}</Text>
          </View>
        ))}
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
