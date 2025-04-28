import { View, Text,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { Link,useNavigation } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { Ionicons } from '@expo/vector-icons';
//import { CreateTripContext } from './../../context/CreateTripContext';
// import { EXPO_PUBLIC_GOOGLE_MAP_KEY } from '@env';


export default function SearchPlace() {

    const navigation=useNavigation();

  //  const {tripData,setTripData}=useContext(CreateTripContext);
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false,
            headerTransparent:true,
            headerTitle:'Search'
        })
    })
  return (
    <View
    style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -20 ,marginTop:-15}}>
             <Ionicons name="arrow-back-outline" size={24} color="black" />
              
            </TouchableOpacity>
 
    <GooglePlacesAutocomplete
      placeholder='Search Place'
      onPress={(data, details = null) => {
        console.log(data, details);
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        // key: EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        textInputContainer:{
          borderRadius:5,
          borderWidth:1,
          marginTop:25
        }      }}
    /> 
    <TouchableOpacity
          style={{
            padding:20,
            backgroundColor:'#FF6B00',
            borderRadius:15,
            marginTop:20,
          
          }}>
          <Link href={'/create-trip/select-traveler'}
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