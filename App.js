import React, { useState } from 'react'
import Motive from './onboarding/Motive.js'
import TableClass from './onboarding/TableClass.js'
import Duration from './onboarding/Duration.js'
import Seats from './onboarding/Seats.js'
import SignIn from './authentication/SignIn.js'
import SignUp from './authentication/SignUp.js'
import CreateProfile from './authentication/CreateProfile.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Motive"
          component={Motive}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TableClass"
          component={TableClass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Duration"
          component={Duration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Seats"
          component={Seats}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
