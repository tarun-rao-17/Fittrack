import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
const days=[1,2,3,4,5,6,7];
import { useState } from "react";

const screenWidth = Dimensions.get("window").width;

const Numofdays = () => {
  const Press=(selecteddays)=>{
    setSelecteddays(selecteddays)
  }
  const[selecteddays,setSelecteddays]=useState(5)
  return (
    <View style={{ justifyContent: "center", alignItems: "center",marginTop:45}}>
      <View style={{ marginTop: 0, maxWidth: 357 }}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 22,
            textAlign: "center",
          }}
        >
          How many days/weeks will you commit?
        </Text>
      </View>
      <View style={{top:59,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:73,color:'#2196F3'}}>{selecteddays}x</Text>
        
      </View>
      <View style={{flexDirection:'row',marginTop:90,justifyContent:'space-around',backgroundColor:'#E0E0E0',borderRadius:20,gap:5}}>
        {days.map((item)=>(
          <TouchableOpacity key={item} style={{width: 40,
            height: 40,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:selecteddays===item?'#2196F3':'#E0E0E0',
            
            
          }} onPress={()=>{setSelecteddays(item)}}>
            <Text style={{fontSize: 18,color:selecteddays===item?'white':'#000'}}>{item}</Text>

          </TouchableOpacity>
        ))}

      </View>
      <View>
        
      </View>
    </View>
  );
};

export default Numofdays;
