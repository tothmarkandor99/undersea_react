import React, {useRef, useState, useEffect} from 'react'
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
import {Fonts} from '../constants/fonts'

interface InfoOverlayProps {
  zIndex?: number
}

export default function InfoOverlay({zIndex = 0}: InfoOverlayProps) {
  const {stats, error, isLoading} = useSelector(
    (state: IApplicationState) => state.app.stats,
  )

  const animationDuration: number = 350
  const rotateAnim = useRef(new Animated.Value(0))
  const rotateValue = rotateAnim.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })
  const [overlayHeight, setOverlayHeight] = useState(90)
  const [overlayControlHeight, setOverlayControlHeight] = useState(25)
  const slideAnim = useRef(new Animated.Value(0))
  const slideValue = slideAnim.current.interpolate({
    // TODO: érdemes lenne ezeket a komponensen belülre mozgatni
    inputRange: [0, 1],
    outputRange: [-overlayHeight + overlayControlHeight, 0],
  })

  const [bottomInfosVisible, setBottomInfosVisible] = useState(false)
  useEffect(() => {
    if (bottomInfosVisible) {
      appear()
    } else {
      disappear()
    }
  }, [bottomInfosVisible])
  const appear = () => {
    Animated.timing(rotateAnim.current, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true,
    }).start()
    Animated.timing(slideAnim.current, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
  }
  const disappear = () => {
    Animated.timing(rotateAnim.current, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true,
    }).start()
    Animated.timing(slideAnim.current, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start()
  }

  return (
    <Animated.View
      onLayout={(event: LayoutChangeEvent) => {
        setOverlayHeight(event.nativeEvent.layout.height)
      }}
      style={[
        styles.mainInfoOverlay,
        {
          position: 'absolute',
          bottom: slideValue,
          zIndex: zIndex,
        },
      ]}>
      <View
        style={styles.controlBar}
        onLayout={event => {
          setOverlayControlHeight(event.nativeEvent.layout.height)
        }}>
        <TouchableOpacity
          onPress={() => {
            setBottomInfosVisible(!bottomInfosVisible)
          }}
          style={styles.controlBarTouchable}>
          <Animated.Image
            source={require('../../assets/img/caret_up.png')}
            style={{transform: [{rotate: rotateValue}]}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoOverlayRow}>
        {stats?.unitStats.map(item => (
          <View style={styles.infoOverlayItem} key={item.id.toString()}>
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
          <View style={styles.infoOverlayItem} key={item.id.toString()}>
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
    backgroundColor: Colors.opaqueWhite,
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
    fontFamily: Fonts.baloo,
    color: Colors.mediumDarkBlue,
  },
})
