import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Waterlogger from './Waterlogger'
import Calories from './calories'
const Status = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <View style={{alignContent:'flex-start',justifyContent:'flex-start',right:100,}}>
      <Text style={{fontFamily:'Poppins-Bold',fontSize:18}}>Activity Status</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:20}}>
        <View>
        <Waterlogger/>
        </View>
        <View>
          <Calories/>
        </View>

      </View>
    </View>
  )
}

export default Status

