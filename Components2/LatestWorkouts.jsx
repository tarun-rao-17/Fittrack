import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LatestWorkouts = () => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
       
          margin: "auto",
        }}
      >
        <View
          style={{
            alignContent: "flex-start",
            justifyContent: "flex-start",
            right: 100,
          }}
        >
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18,left:40 }}>
            Latest Workouts
          </Text>
        </View>
        <View style={{left:50}}>
          <Text>See More</Text>
        </View>
      </View>

    </View>
  );
};

export default LatestWorkouts;
