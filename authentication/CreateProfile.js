import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const CreateProfile = ({ navigation }) => {
  const { goBack } = useNavigation()

  const profileHandler = () => {
    navigation.navigate('Profile', { text: 'Profile' })
    console.log('Profile Created Successfully!')
  }

  return (
    <View style={styles.mainBody}>
      <View style={styles.tab}>
        <Image
          source={require('../assets/onboardingimg/logo_4.png')}
          style={styles.logo}
        />
        <Pressable onPress={goBack}>
          <Icon name="close" size={36} color="#FFF380" />
        </Pressable>
      </View>
      <Text style={styles.title}>Create Profile</Text>
      <View style={styles.inputs}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          placeholderTextColor="#F7F7FF"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Mobile Number"
          placeholderTextColor="#F7F7FF"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Age"
          placeholderTextColor="#F7F7FF"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Gender"
          placeholderTextColor="#F7F7FF"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Profession"
          placeholderTextColor="#F7F7FF"
        />
      </View>
      <Pressable style={styles.selected} onPress={profileHandler}>
        <Text style={styles.option}>CREATE</Text>
      </Pressable>
    </View>
  )
}

export default CreateProfile

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#2B2D2F',
  },
  logo: {
    height: 48,
    width: 48,
  },
  tab: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  inputStyle: {
    color: '#FFFFFF',
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'none',
    borderColor: '#FFFFF7',
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  option: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'black',
  },
  selected: {
    backgroundColor: '#FFF380',
    margin: 6,
    padding: 15,
    borderRadius: 30,
    color: 'white',
    width: '90%',
    marginHorizontal: 'auto',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 32,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginTop: 100,
  },
  inputs: {
    width: '90%',
    marginHorizontal: 'auto',
    marginVertical: 20,
  },
})
