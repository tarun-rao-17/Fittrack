import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function WorkoutTabs() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Personalized');

  const tabs = [
    { name: 'Personalized', route: '/(Workout)/personalized' },
    { name: 'Predefined', route: '/(Workout)/predefined' },
    { name: 'Customized', route: '/(Workout)/customized' }
  ];

  return (
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
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    marginTop: 20
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff'
  },
  tabText: {
    fontWeight: '500',
  },
  activeTabText: {
    color: '#007bff',
    fontWeight: 'bold'
  },
  inactiveTabText: {
    color: '#666'
  }
});