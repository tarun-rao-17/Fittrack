import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ExerciseTracker = ({ exerciseCategory }) => {
  const [exerciseSets, setExerciseSets] = useState({});
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const exercises = {
    Push: ['Push Ups', 'Bench Press', 'Overhead Press', 'Tricep Extension'],
    Pull: ['Pull Ups', 'Rows', 'Bicep Curls', 'Lat Pulldown','kdshk'],
    Legs:['Squats','Deadlifts','Lunges','Leg Press']
  };

  const categoryExercises = exercises[exerciseCategory] || [];

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleStartStopTimer = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
    } else {
      setTimer(0);
      setIsTimerRunning(true);
    }
  };

  const handleAddSet = () => {
    const weightValue = parseFloat(weight);
    if (!reps) {
      alert('Please specify the number of reps');
      return;
    }
    if (!weight || weightValue <= 0) {
      alert('Weight must be greater than 0 kg');
      return;
    }

    const newSet = {
      reps: parseInt(reps, 10),
      weight: weightValue,
      previousReps: 0,
      rpe: 'RPE',
    };
    const updatedExerciseSets = { ...exerciseSets };
    updatedExerciseSets[selectedExercise] = [
      ...(updatedExerciseSets[selectedExercise] || []),
      newSet,
    ];
    setExerciseSets(updatedExerciseSets);
    setReps('');
    setWeight('');
  };

  const handleRemoveSet = (index) => {
    const updatedExerciseSets = { ...exerciseSets };
    updatedExerciseSets[selectedExercise] = updatedExerciseSets[selectedExercise].filter(
      (_, idx) => idx !== index
    );
    setExerciseSets(updatedExerciseSets);
  };

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    setReps('');
    setWeight('');
  };

  const getSetsForSelectedExercise = () => {
    return exerciseSets[selectedExercise] || [];
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.exercisesContainer}>
          {/* Exercise Selection */}
          {categoryExercises.map((exercise) => (
            <TouchableOpacity
              key={exercise}
              style={styles.exerciseCard}
              onPress={() => handleExerciseSelect(exercise)}
            >
              <FontAwesome5 name="dumbbell" size={24} color="#007bff" style={styles.exerciseIcon} />
              <Text style={styles.exerciseTitle}>{exercise}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedExercise && (
          <View style={styles.setsContainer}>
            <Text style={styles.exerciseTitle}>Selected Exercise: {selectedExercise}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Reps"
                keyboardType="numeric"
                value={reps}
                onChangeText={setReps}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
              />
              <TouchableOpacity style={styles.button} onPress={handleAddSet}>
                <Text style={styles.buttonText}>Add Set</Text>
              </TouchableOpacity>
            </View>

            {/* Display Sets */}
            {getSetsForSelectedExercise().map((set, index) => (
              <View key={index} style={styles.setContainer}>
                <Text style={styles.setLabel}>Set {index + 1}</Text>
                <Text style={styles.setDetails}>Reps: {set.reps}</Text>
                <Text style={styles.setDetails}>Weight: {set.weight} kg</Text>
                <Text style={styles.setDetails}>Previous: {set.previousReps}</Text>
                <Text style={styles.setDetails}>RPE: {set.rpe}</Text>
                <TouchableOpacity
                  style={[styles.button, styles.removeButton]}
                  onPress={() => handleRemoveSet(index)}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, isTimerRunning && styles.timerRunning]}
            onPress={handleStartStopTimer}
          >
            <Text style={styles.buttonText}>
              {isTimerRunning ? 'Stop Timer' : 'Start Timer'}
            </Text>
          </TouchableOpacity>
        </View>

        {isTimerRunning && <Text style={styles.timerText}>Timer: {timer} sec</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
      },
      exercisesContainer: {
        marginBottom: 20,
        marginTop:20
      },
      exerciseCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      exerciseIcon: {
        marginRight: 12,
      },
      exerciseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
      },
      exerciseDescription: {
        fontSize: 14,
        color: '#666',
      },
      setsContainer: {
        marginBottom: 20,
      },
      setContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      setLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      setDetails: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
      },
      repsInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      repsInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 8,
        flex: 1,
        marginRight: 12,
        fontSize: 16,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginHorizontal: 4,
      },
      timerRunning: {
        backgroundColor: '#28a745',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      timerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
      },
  scrollContent: {
    paddingBottom: 80, // Adds extra padding to ensure visibility of the last elements
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  setContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 8,
  },
  removeButton: {
    backgroundColor: '#dc3545',
  },
  // Add styles as per your design.
});

export default ExerciseTracker;
