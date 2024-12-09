import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="Todaysactivity" options={{headerShown:false}}  />
        <Stack.Screen name="About" options={{headerShown:false}}  />
        <Stack.Screen name="Posedetection" options={{headerShown:false}}  />
        <Stack.Screen name='Yoga' options={{headerShown:false}}/>
        <Stack.Screen name='meditation' options={{headerShown:false}}/>
    </Stack>
  )
}

export default _layout
