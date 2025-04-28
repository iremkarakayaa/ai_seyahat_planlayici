import { View, Text, TouchableOpacity ,FlatList } from 'react-native'
import React, { useContext, useEffect, useState} from 'react'
import { Link, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { SelectTravelesList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SelectTraveler() {
 
 const navigation=useNavigation();
 const [selectedTraveler,setSelectedTraveler]=useState();
 const {tripData,setTripData}=useContext(CreateTripContext)
 
 useEffect(()=>{
  navigation.setOptions({
    headerShown:false,
    headerTransparent:true,
    headerTitle:''
  })
 },[])
 useEffect(() => {
  console.log('Trip data updated: ', tripData);
}, [tripData]);

 useEffect(()=>{
    setTripData({...tripData,
      traveler:selectedTraveler
    })
 },[selectedTraveler])
 
 useEffect(()=>{
   console.log(tripData);
 },[tripData])

  return (
    
    <View style={{
      padding:25,
      paddingTop:75,
      backgroundColor:Colors.WHITE,
      height:'100%',

    }}>
       <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -20 ,marginTop:-15}}>
       <Ionicons name="arrow-back-outline" size={24} color="black" />
        
      </TouchableOpacity>
      <Text style={{
        fontSize:30,
        fontFamily:'poppins-bold',
        marginTop:27
      }}>Kim Seyahat Ediyor?</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'poppins-medium',
          fontSize:23,
         }}>Kiminle seyahat ediyorsun?</Text>


        <FlatList
          data={SelectTravelesList}
          renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>setSelectedTraveler(item)}
            
            style={{
              marginVertical:10,
            }}>
              <OptionCard option={item} selectedTraveler={selectedTraveler} />
            </TouchableOpacity>
          )}
         
        />
      </View>
      
      <TouchableOpacity
      style={{
        padding:20,
        backgroundColor:'#FF6B00',
        borderRadius:15,
        marginTop:20,
      
      }}>
      <Link href={'/create-trip/select-dates'}
      style={{
        width:'100%',
        textAlign:'center'
      }}>
        <Text style={{
          textAlign:'center',
          color:'#FFFFFF',
          fontFamily:'poppins-medium',
          fontSize:20,
          
        }}>Devam et </Text>
         </Link>
      </TouchableOpacity>
     
    </View>
  )
}