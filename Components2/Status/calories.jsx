import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Circle,G } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useState } from 'react';

const Calories = () => {
  const[value,setValues]=useState(0)
  const calories=760
  const caloriegoal=2000
  const percentage=(calories/caloriegoal)*100
  
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: 150,
        height: 150,
      }}
    >
      <View style={{bottom:3}}>
        <Text style={{fontFamily:'Poppins-SemiBold'}}>Calories Intake</Text>
        
        </View>
        <View style={{bottom:0}}>

      
      <CircularProgress
      radius={40}
      value={percentage}
      textColor='#000'
      fontSize={20}
      valueSuffix={'%'}
      inActiveStrokeColor={'#555570'}
      inActiveStrokeOpacity={0.2}
      activeStrokeColor='#B9B5EC'
      duration={3000}

      
      />
      </View>
      <Text style={{top:0,color:'#B9B5EC',fontSize:20,fontFamily:'Poppins-Bold'}}>760 kcal</Text>
      

    
     

      {/* Displaying text inside the circular progress */}

    </View>
  );
};

export default Calories;
