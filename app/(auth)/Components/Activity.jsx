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
    <View style={{marginTop:20,maxWidth:247}}>
      <Text style={{fontFamily:'Poppins-Bold',fontSize:22,textAlign:'center'}} >What is Your Physical activity Level?</Text>
    </View>
    
    <View style={{marginTop:100,gap:20}}>
        <TouchableOpacity  onPress={()=>{handlegoal('Sedentary')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='Sedentary'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Sedentary'?'white':'grey'
        }}>Sedentary</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('Light')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='Light'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Light'?'white':'grey'
        }}>Light</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('Moderate')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='Moderate'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Moderate'?'white':'grey'
        }}>Moderate</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('Active')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='Active'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Active'?'white':'grey'
        }}>Active</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('Very Active')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal=='Very Active'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Very Active'?'white':'grey'
        }}>Very Active</Text>
        </View>
    </View>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Goal

