import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExerciseTracker from '../../Components2/Excercisetracker';

const PushWorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <ExerciseTracker exerciseCategory="Push" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default PushWorkoutScreen;
