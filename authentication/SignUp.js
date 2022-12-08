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
import { useNavigation, Link } from '@react-navigation/native'

const SignUp = ({ navigation }) => {
  const { goBack } = useNavigation()

  const signupHandler = () => {
    console.log('Signed Up Successfully!')
  }

  const signUpGoogle = () => {
    goBack();
  }

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <View style={styles.mainBody}>
      <View style={styles.tab}>
        <Image
          source={require('../assets/onboardingimg/logo_4.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.layout}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          placeholderTextColor="#F7F7FF"
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          placeholder="Username"
          placeholderTextColor="#F7F7FF"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          placeholder="Enter Password"
          placeholderTextColor="#F7F7FF"
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
        <TextInput
          style={styles.inputStyle}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          placeholder="Enter Password"
          placeholderTextColor="#F7F7FF"
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
        <Pressable style={styles.selected} onPress={signupHandler}>
          <Text style={styles.option}>SIGN UP</Text>
        </Pressable>
        <Text style={styles.create}>
          Already have an account?
          <Link to={{ screen: 'SignIn' }} style={styles.link}>
            {' '}
            Sign In
          </Link>
        </Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, width: '100%' }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: '#F7F7FF' , width: '80%'}} />
          <View>
            <Text
              style={{
                width: 50,
                textAlign: 'center',
                color: '#F7F7FF',
                paddingHorizontal: 8,
              }}
            >
              OR
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#F7F7FF', width: '80%' }} />
        </View>
        <Text style={[styles.create, {marginTop: 16}]}>
          Sign Up with
        </Text>
        <Pressable onPress={signUpGoogle}>
          <Image
              source={require('../assets/authentication/google_logo.png')}
              style={styles.image}
          />
        </Pressable>
      </View>
    </View>
  )
}

export default SignUp

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
  image: {
    width: 50,
    height: 50,
    marginTop: 16,
  },
  tab: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: 48,
    width: 48,
    marginTop: 15,
  },
  signInText: {
    color: '#FFF380',
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 24,
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
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 32,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 60,
  },
  create: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: -8,
  },
  link: {
    color: '#55AAFF',
  },
  layout: {
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#203354',
    height: '70%',
    marginVertical: 10,
  },
})
