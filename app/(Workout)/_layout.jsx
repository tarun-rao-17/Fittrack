import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='customized' options={{headerShown: false}}/>
        <Stack.Screen name='personalized' options={{headerShown: false}}/>
        <Stack.Screen name='predefined' options={{headerShown: false}}/>
    </Stack>

  )
}

export default _layout

const styles = StyleSheet.create({})