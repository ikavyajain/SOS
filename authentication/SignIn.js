import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Link } from '@react-navigation/native'

const SignIn = ({ navigation }) => {
  const forgotPassword = () => {}

  const signinHandler = () => {
    console.log('Signed In Successfully!')
    setErrortext('')
    if (!userEmail) {
      alert('Please fill Email')
      return
    }
    if (!userPassword) {
      alert('Please fill Password')
      return
    }
  }

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [errortext, setErrortext] = useState('')

  return (
    <View style={styles.mainBody}>
      <Image
        source={require('../assets/onboardingimg/logo_4.png')}
        style={styles.logo}
      />
      <View style={styles.layout}>
        <Image
          source={require('../assets/authentication/image_hand.png')}
          style={styles.image}
        />
        <Text style={styles.greet}>Hi Guys!</Text>
        <Text style={styles.title}>Sign In to SOS</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          placeholder="Username"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          placeholder="Enter Password" //12345
          placeholderTextColor="#8b9cb5"
          keyboardType="default"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          secureTextEntry={true}
          returnKeyType="next"
          accessoryRight={(props) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setHide(!hide)
                }}
              >
                <Icon
                  {...props}
                  name={hide ? 'eye' : 'eye-slash'}
                  size={24}
                  color="#203354"
                />
              </TouchableOpacity>
            )
          }}
        />
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}>{errortext}</Text>
        ) : null}
        <Text style={styles.forgot} onPress={forgotPassword}>
          Forgot Password?
        </Text>
        <Pressable style={styles.selected} onPress={signinHandler}>
          <Text style={styles.option}>SIGN IN</Text>
        </Pressable>
        <Text style={styles.create}>
          Don't have an account?
          <Link to={{ screen: 'CreateProfile' }} style={styles.link}>
            {' '}
            Create
          </Link>
        </Text>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#2B2D2F',
  },
  logo: {
    height: 48,
    width: 48,
    marginTop: 15,
    marginLeft: 10,
  },
  selected: {
    backgroundColor: '#FFF380',
    margin: 6,
    padding: 15,
    borderRadius: 30,
    color: 'white',
    width: '100%',
    marginVertical: 30,
  },
  inputStyle: {
    color: 'black',
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#fff',
    marginVertical: 10,
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  link: {
    color: '#55AAFF',
  },
  option: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'black',
  },
  greet: {
    textAlign: 'center',
    color: '#A9A9A9',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -30,
  },
  create: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: -8,
  },
  forgot: {
    color: '#fff',
    fontSize: 16,
    marginLeft: '50%',
    marginTop: -4,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 32,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  layout: {
    borderRadius: 16,
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 50,
    paddingHorizontal: 24,
    backgroundColor: '#203354',
    height: '90%',
    marginVertical: 'auto',
    marginBottom: 14,
  },
  image: {
    alignSelf: 'center',
    width: '70%',
    height: '40%',
    resizeMode: 'contain',
  },
})
