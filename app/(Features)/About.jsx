import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Customcomp2 from '../../Components2/customcomp2'
import { FontAwesome5 } from '@expo/vector-icons'
import CustomListItem from '../(auth)/Components/ListItem'

const data=["PoseDetection","Gamification","Leaderboard","ActivityTracking","Nutrition Logger","Rewards","Challenges",]

const About = () => {
  return (
    
    <SafeAreaView style={{backgroundColor:'#E5E5E5',height:'100%',}}>
    <View style={{marginBottom: 8,
          marginLeft: 20,
          marginTop: 20,}} >
      <Text style={{fontFamily:'Poppins-Bold',left:10,fontSize:18}}>Our Features</Text>
    </View>
    <View>
      <CustomListItem icon={<FontAwesome5 name="running" size={20}/>}
      name={data[0]}
      path='/Posedetection'
      
      />
      
    </View>
    <View style={{marginTop:15}} >
      <CustomListItem icon={<FontAwesome5 name="gamepad" size={20}/>}
      name={data[1]}/>
      </View>
      <View style={{marginTop:15}}>
      <CustomListItem icon={<FontAwesome5 name="trophy" size={20}/>
      }  name={data[2]}/>
      </View>
      <View style={{marginTop:15}}>
      <CustomListItem icon={<FontAwesome5 name="walking" size={20}/>}
      name={data[3]}/>
      
      
      </View>
      <View style={{marginTop:15}}>
      <CustomListItem icon={<FontAwesome5 name="utensils" size={20}/>}
      
      name={data[4]}/>
      
      </View>
      <View style={{marginTop:15}}>
      <CustomListItem icon={<FontAwesome5 name="gift" size={20}/>}
      name={data[5]}/>
      </View>
      <View style={{marginTop:15}}>
      <CustomListItem icon={<FontAwesome5 name="flag" size={20}/>}
      name={data[6]}/>
      </View>
      

      
    </SafeAreaView>
  
  )
}

export default About
