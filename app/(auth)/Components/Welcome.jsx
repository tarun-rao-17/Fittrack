import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const workouts = ['cardio', 'compound', 'Yoga'];


const Welcome = () => {
    const[workoutstype, setWorkouts] = useState('cardio')
  const router = useRouter();

  return (
    <View style={{ width: "100%",
        marginTop:16,justifyContent:'center',alignItems:'center',flexDirection:'row'
     }}>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ backgroundColor: 'black',
            padding: 10,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 10,
            borderWidth:workoutstype===item?2:0,
            borderColor:workoutstype===item?'yellow':'black',
          }}
          onPress={() =>{
            setWorkouts(item)
          
          router.push(`/Search/${item}`)}}>
            <Text style={{color:'white',fontFamily:'Poppins-Regular',fontSize:14}}>{item}</Text>
          </TouchableOpacity>
        )}
    
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{columnGap:10,justifyContent:'center',alignItems:'center',paddingHorizontal:16}}
      />
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
    
});
