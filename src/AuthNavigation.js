import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import SignUpScreen from '../src/screens/SignUpScreen';
import LoginScreen from '../src/screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Welcomepage'>
        <Stack.Screen name="Welcomepage" component={WelcomeScreen} 
             options={{
                  headerShown: false
             }}
        />
        
        <Stack.Screen name="Signup" component={SignUpScreen} 
        options={{
            headerShown: false
       }}/>
        <Stack.Screen name="Login" component={LoginScreen}
        options={{
            headerShown: false
       }}/>
       <Stack.Screen name="Home" component={HomeScreen}
        options={{
            headerShown: false
       }}/>


    </Stack.Navigator>

    
  )
}

export default AuthNavigation