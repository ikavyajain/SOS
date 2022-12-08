import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { category } from '../util/Onboardingdata.js'
import { useNavigation } from '@react-navigation/native'

export default function Seats({ navigation }) {
  const { goBack } = useNavigation()
  const [seats, setSeats] = useState(null)

  const selectHandler = (value) => {
    setSeats(value)
    console.log(value)
  }

  const onIconPressNext = () => {
    navigation.push('Duration', { text: 'Duration' })
  }

  const onIconPressSkip = () => {
    navigation.navigate('SignIn', { text: 'SignIn' })
  }

  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Image
          source={require('../assets/onboardingimg/logo_4.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={onIconPressSkip}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/onboardingimg/image_wallet.png')}
        style={styles.image}
      />
      <Text style={styles.category}>No of Seats</Text>
      <View style={styles.selection}>
        {category.seats.map((item) => {
          return (
            <Pressable
              style={item.value === seats ? styles.selected : styles.unselected}
              onPress={() => selectHandler(item.value)}
            >
              <Text style={styles.option}> {item.value}</Text>
            </Pressable>
          )
        })}
      </View>
      <View style={styles.tab}>
        <TouchableOpacity onPress={goBack}>
          <View style={[styles.bottombutton, { backgroundColor: '#55AAFF' }]}>
            <Icon name="arrow-left" size={24} color="#1e1e1e" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onIconPressNext}>
          <View style={[styles.bottombutton, { backgroundColor: '#FFF380' }]}>
            <Icon name="arrow-right" size={24} color="#1e1e1e" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203354',
  },
  option: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: 'black',
  },
  unselected: {
    backgroundColor: '#55AAFF',
    margin: 8,
    padding: 10,
  },
  logo: {
    height: 48,
    width: 48,
    marginTop: 15,
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 15,
    color: '#fff',
  },
  bottombutton: {
    width: 54,
    height: 54,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  skipText: {
    color: '#FFF380',
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 24,
  },
  tab: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selected: {
    backgroundColor: '#FFF380',
    margin: 6,
    fontWeight: 'bold',
    padding: 15,
    borderRadius: 10,
    color: 'white',
  },
  image: {
    width: '90%',
    height: 250,
    marginTop: 90,
    marginHorizontal: 'auto',
    resizeMode: 'contain',
  },
  selection: {
    marginTop: 10,
  },
})
