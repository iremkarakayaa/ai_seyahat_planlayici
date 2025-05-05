import { View, Text ,FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { FlatList } from 'react-native-web';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {
    
    const navigation=useNavigation();
    const [selectedOption,setSelectedOption]=useState();
     const {tripData,setTripData}=useContext(CreateTripContext)
    const router=useRouter();
    useEffect(()=>{
         navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
         })
    },[])
    useEffect(()=>{
setTripData&&setTripData({
    ...tripData,
    budget:selectedOption?.title
})
    },[selectedOption])


const onClickContinue=()=>{
    if(!selectedOption){
        ToastAndroid.show('Bütçe seçmelisin!',ToastAndroid.LONG);
        return;
    }
    router.push('');
}
  return (
    <View style={{
        paddingTop:75,
        padding:25,
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>
      <Text style={{
        fontFamily:'poppins-bold',
        fontsize:35,
        marginTop:20
      }}>Bütçe</Text>
      <View>
        <Text style={{
            fontFamily:'poppins-bold',
            fontSize:20
        }}>Seyahatin için bir bütçe seç</Text>
   <FlatList 
  data={SelectBudgetOptions}
  renderItem={({ item, index }) => (
    <TouchableOpacity
      style={{ marginVertical: 10 }}
      onPress={() => setSelectedOption(item)} 
    >
      <OptionCard 
        option={item} 
        selectedOption={selectedOption} 
      />
    </TouchableOpacity>
  )}
/>



      </View>

      <TouchableOpacity
      onPress={()=>onClickContinue}
            style={{
              padding:20,
              backgroundColor:'#FF6B00',
              borderRadius:15,
              marginTop:20,
            
            }}>
{/*             
            style={{
              width:'100%',
              textAlign:'center'
            }} */}
              <Text style={{
                textAlign:'center',
                color:'#FFFFFF',
                fontFamily:'poppins-medium',
                fontSize:20,
                
              }}>Devam et </Text>
             
            </TouchableOpacity>
    </View>
  )
}