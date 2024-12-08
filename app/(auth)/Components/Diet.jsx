import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

const Diet = () => {
  const [diet, setDiet] = useState("");
  const food = ["Vegetarian", " Non Vegetarian", "Vegan", "Keto"];
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginTop: 20,maxWidth:300  }}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 22,
            textAlign: "center",
            lineHeight: 33,
            
          }}
          numberOfLines={2}
        >
          Do you have a specific Dietary preference?
        </Text>
      </View>
      <View style={{ flexDirection: "column", gap: 20, marginTop: 100 }}>
        {food.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: 315,
                paddingHorizontal: 20,
                paddingVertical: 25,
                height: 48,
                borderRadius: 20,
                backgroundColor: diet === item ? "#1976D2" : "#E0E0E0",
              }}
              onPress={() => {
                setDiet(item);
              }}
            >
              <View
                style={{
                  position: "absolute",
                  margin: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    fontSize: 20,
                    color: diet === item ? "white" : "grey",
                    textAlign: "center",
                  }}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Diet;
