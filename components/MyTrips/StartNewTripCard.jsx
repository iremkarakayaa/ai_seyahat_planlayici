import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
export default function StartNewTripCard() {

   const router=useRouter();
  

  return (
    <View
    style={{
        padding:20,
        marginTop:30,
        display:'flex',
        alignItems:'center',
        gap:25
    }}>
     <Ionicons name="location-sharp" size={24} color="black" />
     <Text
     style={{
        fontFamily:'poppins-medium',
        fontSize:25,
        marginTop:2,
       
     }}>
        Henüz seyahat planın yok
     </Text>
   
     <Text
     style={{
        fontFamily:'poppins',
        fontSize:20,
        textAlign:'center',
        color:Colors.GRAY,
        marginTop:20,
     }}>
        Seyahat etmenin zamanı geldi.Planlamaya başlayın!
     </Text>

     <TouchableOpacity
     onPress={()=>router.push('/create-trip/search-place')}
     style={{
        padding:10,
        backgroundColor:'#FF6B00',
        borderRadius:15,
        paddingHorizontal:15

     }}>
        <Text style={{
            color:Colors.WHİTE,
            fontFamily:'poppins-medium',
            fontSize:15
        }}>Yeni bir yolculuğa başla 🌍</Text>
     </TouchableOpacity>
    </View>
  )
}