import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExerciseTracker from '../../Components2/Excercisetracker'

const pull = () => {
    return (
        <View style={styles.container}>
          <ExerciseTracker exerciseCategory="Pull" />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
      },
    });

export default pull
