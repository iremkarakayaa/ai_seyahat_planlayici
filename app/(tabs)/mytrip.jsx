import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
export default function Mytrip() {

  const [userTrips,setUserTrips]=useState([]);
  return (
    <View style={{
      padding:25,
      paddingTop:55,
      backgroundColor:Colors.WHİTE,
      height:'100%'
    }}>
    <View
    style={{
      display:'flex',
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'space-between'
    }}>
      <Text
      style={{
        fontFamily:'poppins-bold',
        fontSize:28
      }}>Seyahatlerim</Text>
      <Ionicons name="add-circle" size={36} color="black" />
    </View>
     

      {userTrips?.length==0?
       <StartNewTripCard/>
       :null} 
    </View>
  )
}