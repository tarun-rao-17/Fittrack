import { StyleSheet, Text, Touchable, View ,TouchableOpacity} from 'react-native'
import { useState } from 'react'
import React from 'react'
import Customfield from './Customfield'

const Goal = () => {
    const [goal,setGoal]=useState('')
    const handlegoal=(goal)=>{
        setGoal(goal)
    }
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <View style={{marginTop:20}}>
      <Text style={{fontFamily:'Poppins-Bold',fontSize:22}}>What is Your Goal?</Text>
    </View>
    
    <View style={{marginTop:100,gap:20}}>
        <TouchableOpacity  onPress={()=>{handlegoal('Muscle Gain')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='Muscle Gain'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Muscle Gain'?'white':'grey'
        }}>Muscle Gain</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('Maintain Weight')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='Maintain Weight'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Maintain Weight'?'white':'grey'
        }}>Maintain Weight</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('Lose Weight')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='Lose Weight'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Lose Weight'?'white':'grey'
        }}>Lose Weight</Text>
        </View>
    </View>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Goal

