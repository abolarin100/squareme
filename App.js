import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, TouchableOpacity } from 'react-native';
import Onboarding from './Screens/Onboarding';

import Onboarding3 from './Screens/Onboarding3';
import Onboarding1 from './Screens/Onboarding1';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import VerifyPhone from './Screens/VerifyPhone';
import PhoneSuccess from './Screens/PhoneSuccess';
import SetPin from './Screens/SetPIn';
import ConfirmPin from './Screens/ConfirmPin';
import PinSuccess from './Screens/PinSuccess';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={Onboarding}  options={{ headerShown: false }} />
        <Stack.Screen name='Onboarding2' component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name='Onboarding3' component={Onboarding3}  options={{ headerShown: false }}/>
        <Stack.Screen name='Login' component={Login} 
         options={{
           headerShown: false,
        
        }}/>
        <Stack.Screen name='SignUp' component={SignUp}  
        options={({ navigation }) => ({
          title: "Enter Your Phone Number",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} className='ml-2'>
              <Ionicons name="arrow-back" size={24} color="#000A4A" />
            </TouchableOpacity>
          ),
          headerTitle: 'Enter Your Phone Number',
          headerTitleStyle: {
            color: '#000A4A',
            fontSize: 20
          },
        })}/>
        <Stack.Screen name='VerifyPhone' component={VerifyPhone}  
        options={({ navigation }) => ({
          title: "Enter Your Phone Number",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} className='ml-2'>
              <Ionicons name="arrow-back" size={24} color="#000A4A" />
            </TouchableOpacity>
          ),
          headerTitle: 'Verify Phone Number',
          headerTitleStyle: {
            color: '#000A4A',
            fontSize: 20
          },
        })}/>
        <Stack.Screen name='PhoneSuccess' component={PhoneSuccess}  options={{ headerShown: false }} />

        <Stack.Screen name='SetPin' component={SetPin}  
        options={({ navigation }) => ({
          title: "Set Your Security PIN",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} className='ml-2'>
              <Ionicons name="arrow-back" size={24} color="#000A4A" />
            </TouchableOpacity>
          ),
          headerTitle: 'Set Your Security PIN',
          headerTitleStyle: {
            color: '#000A4A',
            fontSize: 20
          },
        })}/>
        <Stack.Screen name='ConfirmPin' component={ConfirmPin}  
        options={({ navigation }) => ({
          title: "Confirm PIN",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} className='ml-2'>
              <Ionicons name="arrow-back" size={24} color="#000A4A" />
            </TouchableOpacity>
          ),
          headerTitle: 'Confirm PIN',
          headerTitleStyle: {
            color: '#000A4A',
            fontSize: 20
          },
        })}/>

<Stack.Screen name='PinSuccess' component={PinSuccess}  options={{ headerShown: false }} />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

