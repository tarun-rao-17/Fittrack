import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PersonalizedWorkout() {
  const personalizedWorkouts = [
    {
      id: 1,
      title: 'Fat Burn Cardio',
      duration: '45 min',
      calories: 450,
      focus: 'Weight Loss'
    },
    {
      id: 2,
      title: 'Strength Builder',
      duration: '60 min',
      calories: 350,
      focus: 'Muscle Gain'
    },
    {
      id: 3,
      title: 'Flexibility Flow',
      duration: '30 min',
      calories: 200,
      focus: 'Mobility'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Personalized Workouts</Text>
        <Text style={styles.headerSubtitle}>
          Tailored to your fitness goals
        </Text>
      </View>

      {personalizedWorkouts.map((workout) => (
        <TouchableOpacity 
          key={workout.id} 
          style={styles.workoutCard}
        >
          <Text style={styles.workoutTitle}>{workout.title}</Text>
          <View style={styles.workoutDetails}>
            <Text>{workout.duration}</Text>
            <Text>{workout.calories} Cal</Text>
            <Text>{workout.focus}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  headerContainer: {
    marginBottom: 20
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666'
  },
  workoutCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  workoutDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});