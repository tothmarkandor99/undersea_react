import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {View, StyleSheet, Text, SafeAreaView, Image} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

interface GameScreenProps {
  navigation: StackNavigationProp<any>
}

const GameScreen = ({navigation}: GameScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Undersea</Text>
          <Image
            style={styles.avatar}
            resizeMode="center"
            source={require('../../assets/img/avatar.png')}
          />
        </View>
        <View style={styles.main}>
          <Text>Main</Text>
        </View>
        <LinearGradient
          style={styles.footer}
          colors={['#9FFFF0', '#6BEEE9', '#0FCFDE']}
          start={[0.5, 0]}
          end={[0.5, 1]}>
          <View style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="center"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </View>
          <View style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="center"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </View>
          <View style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="center"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </View>
          <View style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="center"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </View>
          <View style={styles.footerButton}>
            <Image
              style={styles.footerButtonImage}
              resizeMode="center"
              source={require('../../assets/img/avatar.png')}
            />
            <Text style={styles.footerButtonText}>Épületek</Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#1C3E76',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Baloo',
    color: '#9FFFF0',
    textTransform: 'uppercase',
  },
  avatar: {},
  main: {
    backgroundColor: 'red',
    flexGrow: 1,
  },
  footer: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonImage: {
    height: 50, // TODO: flexbox a fix méret helyett
  },
  footerButtonText: {
    color: '#367987',
    fontFamily: 'Baloo',
  },
})

export default GameScreen
