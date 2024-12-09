import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useState } from "react";

const Gender = () => {
    const[gender,setgender]=useState('')
    const gen=["male","Female","other"]
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20, }}>
        What is Your Gender?
      </Text>
      <View style={{ flexDirection: "column", gap: 20,marginTop:100}}>
        {gen.map((item, index) => {
            return(
          <TouchableOpacity
            key={index}
            style={{
              width: 315,
              paddingHorizontal: 20,
              paddingVertical: 25,
              height: 48,
              borderRadius: 20,
              backgroundColor: gender===item?'#1976D2':'#E0E0E0',
              
            }} onPress={()=>setgender(item)}>
                 <View style={{position:'absolute',margin:'auto',justifyContent:'center',alignItems:'center',top:0,left:0,right:0,bottom:0}}>
            <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:gender===item?'white':'grey',textAlign:'center'}}>{item}</Text>
            </View>


            </TouchableOpacity>
            )
        })}



      </View>
    </View>
  );
};

export default Gender;
