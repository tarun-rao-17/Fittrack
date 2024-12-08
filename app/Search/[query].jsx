import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Search = () => {
  const { query } = useLocalSearchParams(); 

  return (
    <LinearGradient
        colors={["#1586D0", "#08BDC8"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ width: "100%", height: "100%" }}
      >
    <SafeAreaView >
      <View style={{marginTop:20}}>
        <Text style={{fontFamily:'Poppins-Black',fontSize:20}}>Search Results for {query}</Text>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default Search;
