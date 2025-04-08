import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors'
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRİMARY
    }}>

        <Tabs.Screen name="mytrip"
        options={{
          tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color="black" />,
          tabBarLabel:'Seyahatlerim',
          tabBarLabelStyle: {
            fontFamily: 'poppins-bold',
            fontSize: 10,
            color: 'black',
          },
        }}
        />
        <Tabs.Screen name="discover"
         options={{
          tabBarIcon:({color})=><Ionicons name="globe-sharp" size={24} color="black" />,
          tabBarLabel:'Keşfet',
          tabBarLabelStyle: {
            fontFamily: 'poppins-bold',
            fontSize: 10,
            color: 'black',
          },
        }}
        />
        <Tabs.Screen name="profile"
         options={{
          tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color="black" />,
          tabBarLabel:'Profilim',
          tabBarLabelStyle: {
            fontFamily: 'poppins-bold',
            fontSize: 10,
            color: 'black',
          },
        }}/>
        
    </Tabs>
  )
}