import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

const Preference = () => {
   const[preference,setPreference]=useState('')
  const prefer = ["Powerlifting", " Strength Training", "Cross Fit", "Cardio","Yoga"];
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginTop: 20, maxWidth: 347 }}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 22,
            textAlign: "center",
          }}
        >
          Do you have a specific workout preference?
        </Text>
      </View>
      <View style={{ flexDirection: "column", gap: 20,marginTop:100 }}>
        {prefer.map((item, index) => {
            return(
          <TouchableOpacity
            key={index}
            style={{
              width: 315,
              paddingHorizontal: 20,
              paddingVertical: 25,
              height: 48,
              borderRadius: 20,
              backgroundColor: preference===item?'#1976D2':'#E0E0E0',

              
            }}
            onPress={()=>{setPreference(item)}}
          >
            <View style={{position:'absolute',margin:'auto',justifyContent:'center',alignItems:'center',top:0,left:0,right:0,bottom:0}}>
            <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:preference===item?'white':'grey',textAlign:'center'}}>{item}</Text>
            </View>
          </TouchableOpacity>
            )

        })}
      </View>
    </View>
  );
};

export default Preference;
