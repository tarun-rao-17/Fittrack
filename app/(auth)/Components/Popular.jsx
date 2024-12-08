import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity,FlatList } from 'react-native'
import { Image } from 'react-native'


export const sliderimages=[
    require('../../../assets/slide1.png'),
    require('../../../assets/slide2.png'),
    require('../../../assets/slide3.png'),
    require('../../../assets/slide4.png'),
    require('../../../assets/slide5.png'),]
     const labels=[
        'cardio',
        'compound',
        'Yoga',
        'crossfit',
        'strength',
    ]
 





const Popular = ({images=sliderimages}) => {
  
  return (
    <View style={{marginTop:25}}> 
    <TouchableOpacity >
        <FlatList 
        data={images}
        renderItem={({item,index})=>(
            <TouchableOpacity>
            <View  style={{
              width: 200,
              height: 240,
              margin: 10, 
              padding: 10, 
              backgroundColor: '#36454F',
              borderRadius: 20, 
              justifyContent: 'center', 
              alignItems: 'center',
            }}>
                <Image source={item} style={{width:180,height:180,borderRadius:20}}
                resizeMode='cover'
                />
                <Text style={{marginTop:5,color:'#D3D3D3',fontFamily:'Poppins-Bold',fontSize:15}}>{labels[index]}</Text>

                
            </View>
            </TouchableOpacity>
        )}
        keyExtractor={(item,index)=>index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
        />
        
    </TouchableOpacity>
    </View>

  )
}

export default Popular



