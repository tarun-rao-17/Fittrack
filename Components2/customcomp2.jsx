import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Customcomp2 = ({icon,title,rightEle,onPress}) => {
  return (
    <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
      }}
      onPress={onPress}>
        <View style={{
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
      }}>
        {icon}


        </View>
        <Text style={{ flex: 1,
        fontSize: 16,
        color: '#666',}}>
            {title}

        </Text>
        <View style={{ marginLeft: 8 }}>
        {rightEle}
      </View>

    </TouchableOpacity>

  )
}

export default Customcomp2
