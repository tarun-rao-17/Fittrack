import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Waterlogger = () => {
    const waterintake=4;
    const watergoal=5;
    const waterpercent=(waterintake/watergoal)*100;

  return (
    

    <View style={{alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: 150,
        height:150}}>
            <View style={{display:'flex',flexDirection:'row',gap:20,top:10}}>
            <View style={{height:100,width:20,backgroundColor:'#e0e0e0',borderRadius:20,marginBottom:10,overflow:'hidden'}}>
                
                <View style={{height:`${waterpercent}%`, backgroundColor: '#4A90E2',marginTop:20}}/>
                

            
            </View>
            <View>
            <Text style={{fontFamily:'Poppins-SemiBold'}}>Water Intake</Text>
            <Text style={{fontSize:20,fontFamily:'Poppins-Bold',color:'#4A90E2'}}>{waterintake}Litres</Text>
            </View>
            </View>
        

        
        

    </View>
  )
}

export default Waterlogger
