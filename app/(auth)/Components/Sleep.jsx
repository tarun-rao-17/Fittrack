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
      <Text style={{fontFamily:'Poppins-Bold',fontSize:22,textAlign:'center'}} >What is Your sleep quality like?</Text>
    </View>
    
    <View style={{marginTop:100,gap:20}}>
        <TouchableOpacity  onPress={()=>{handlegoal('More than 8 hours')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='More than 8 hours'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='More than 8 hours'?'white':'grey'
        }}>More than 8 hours</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('7-8 hours')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='7-8 hours'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='7-8 hours'?'white':'grey'
        }}>7-8 hours</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('6-7 hours')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='6-7 hours'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='6-7 hours'?'white':'grey'
        }}>6-7 hours</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('5-6 hours')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal==='5-6 hours'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='5-6 hours'?'white':'grey'
        }}>5-6 hours</Text>
        </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{handlegoal('Less than 6 hours')}}>
    <View style={{width:315,paddingHorizontal:20,paddingVertical:25,height:48,borderRadius:20,backgroundColor:goal=='Less than 6 hours'?'#1976D2':'#E0E0E0',position:'relative'}}>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:0,left:0,right:0,bottom:0
        }}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20,color:goal==='Less than 6 hours'?'white':'grey'
        }}>Less than 6 hours</Text>
        </View>
    </View>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Goal

