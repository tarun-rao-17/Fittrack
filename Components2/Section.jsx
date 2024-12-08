import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Section = ({title,children}) => {
  return (
    <View style={{ backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,}}>
          {title&&(<Text style={{ fontSize: 20,
          color: '#333',
          marginBottom: 8,
          marginLeft: 20,
          marginTop: 20,
          fontFamily:'Poppins-Bold'}}>
              {title}
            </Text>)}
            {children}

    </View>

  )
}

export default Section

const styles = StyleSheet.create({})