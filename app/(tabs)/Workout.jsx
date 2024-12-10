import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const { width } = Dimensions.get('window');

const WorkoutTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('Personalized');

  // More robust route tracking
  useEffect(() => {
    console.log('Current Pathname:', pathname);
    switch (pathname) {
      case '/':
      case '/(Workout)':
      case '/(Workout)/':
        setActiveTab('Personalized');
        break;
      case '/(Workout)/predefined':
        setActiveTab('Predefined');
        break;
      case '/(Workout)/customized':
        setActiveTab('Customized');
        break;
      default:
        setActiveTab('Personalized');
    }
  }, [pathname]);

  const tabs = [
    { name: 'Personalized', route: '/' },
    { name: 'Predefined', route: '/(Workout)/predefined' },
    { name: 'Customized', route: '/(Workout)/customized' }
  ];

  const TabBar = () => (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={[
            styles.tab,
            activeTab === tab.name && styles.activeTab
          ]}
          onPress={() => {
            setActiveTab(tab.name);
            router.push(tab.route);
          }}
        >
          <Text style={[
            styles.tabText,
            activeTab === tab.name ? styles.activeTabText : styles.inactiveTabText
          ]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const PersonalizedWorkout = () => {
    const workouts = [
      {
        id: 1,
        title: 'Push',
        route: '/personalizedplan/push',
        icon: 'dumbbell', // Icon for chest and triceps pushing movements
        description: 'Chest, Shoulders & Triceps'
      },
      {
        id: 2,
        title: 'Pull',
        route: '/personalizedplan/pull',
        icon: 'running', // Icon representing pulling movements
        description: 'Back & Biceps'
      },
      {
        id: 3,
        title: 'Legs',
        route: '/personalizedplan/legs',
        icon: 'walking', // Icon for leg movements
        description: 'Quads, Hamstrings & Calves'
      },

    ];

    const renderWorkoutCard = (workout) => {
      return (
        <TouchableOpacity 
          key={workout.id}
          style={styles.workoutCard}
          onPress={() => router.push(workout.route)}
        >
          <View style={styles.workoutCardContent}>
            <View style={styles.workoutTitleContainer}>
              <FontAwesome5 
                name={workout.icon} 
                size={24} 
                color="#007bff" 
                style={styles.workoutIcon}
              />
              <View>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <Text style={styles.workoutDescription}>{workout.description}</Text>
              </View>
            </View>
            <ChevronRight 
              color='#007bff' 
              size={24} 
            />
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Workout Plans</Text>
          <Text style={styles.headerSubtitle}>
            Choose your training split
          </Text>
        </View>

        <View style={styles.workoutsContainer}>
          {workouts.map(renderWorkoutCard)}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <TabBar />
      <PersonalizedWorkout />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  scrollViewContent: {
    paddingBottom: 20
  },
  tabContainer: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff'
  },
  tabText: {
    fontWeight: '500',
    fontSize: 16
  },
  activeTabText: {
    color: '#007bff',
  },
  inactiveTabText: {
    color: '#666',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#f5f5f5'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666'
  },
  workoutsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10
  },
  workoutCard: {
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  workoutCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  workoutTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workoutIcon: {
    marginRight: 15,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  workoutDescription: {
    fontSize: 14,
    color: '#666'
  }
});

export default WorkoutTabs;