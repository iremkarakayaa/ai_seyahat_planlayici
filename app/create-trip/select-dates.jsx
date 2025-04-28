import { View, Text ,TouchableOpacity,} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import { Ionicons } from '@expo/vector-icons';
export default function SelectDates() {
  
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    })
  
    const onDateChange = (date) => {
        
      };
    
    return (
        <View style={{
            marginTop:80
        }}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -20 ,marginTop:-15}}>
       <Ionicons name="arrow-back-outline" size={24} color="black" />
        
      </TouchableOpacity> */}
            <Text style={{
                fontFamily:'poppins-bold',
                fontSize:35,
                marginTop:15
            }}>Seyahat Tarihi</Text>
            
        <CalendarPicker
          onDateChange={onDateChange}  // Burada onDateChange fonksiyonunu doğrudan tanımlıyoruz
          allowRangeSelect={true}
          locale="tr"  // Takvim Türkçe olacak
          minDate={new Date()}  // Bugünden önceki tarihler seçilemez
          maxRangeDuration={5}  // Maksimum 5 günlük tarih aralığı seçilebilir
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,  // Seçilen aralığın rengi
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,  // Seçilen günün yazı rengi
          }}
        />
      </View>
    );
  }