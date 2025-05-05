import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,selectedOption}) {
  return (
    <View style={[{
        padding:25,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#dddddd',
        borderRadius:15,

    },selectedOption?.id==option?.id &&{borderWidth:3}]}>
      <View>
          <Text style={{
            fontSize:20,
            fontFamily:'poppins-bold'
          }}>{option?.title}</Text>
          <Text style={{
            fontSize:17,
            fontFamily:'poppins-medium',
            color:Colors.GRAY
          }}>{option?.desc}</Text>
      </View>
      <Text style={{
        fontSize:40,
      }}>{option?.icon}</Text>
    </View>
  )
}