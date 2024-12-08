import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Circle, G } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

const pie = () => {
  const data = [
    { name: "Normal Weight", value: 70, color: "#21c0f7" },
    { name: "Overweight", value: 30, color: "#e0e0e0" },
  ];
  const radius = 50;
  const strokeWidth = 10;
  const circumferences = 2 * Math.PI * radius;
  const calculateTotal = (data) => {
    let cumulatives = 0;
    return data.map((item) => {
      const slice = { ...item, cumulative: cumulatives };
      cumulatives += item.value;
      return slice;
    });
  };
  const piesegments = calculateTotal(data);
  return (
    <LinearGradient
      colors={["#1586D0", "#08BDC8"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      style={{
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        height: 190,
        width: 340,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 3,
        left: 20,
        marginTop: 20,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{display:'flex',flexDirection:'column'}}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "600",
              fontFamily: "Poppins-Bold",
            }}
          >
            BMI(Body Mass Index)
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              marginTop: 5,
              fontFamily: "Poppins-Regular",
            }}
          >
            Your BMI is normal
          </Text>
        </View>
        <TouchableOpacity>
        
        <View style={{padding:10,backgroundColor:'white',width:100,borderRadius:20,justifyContent:'center',alignItems:'center',left:10,top:12}}>
            <Text style={{fontFamily:'Poppins-SemiBold'}}>View More</Text>
        </View>
        </TouchableOpacity>
        </View>
        <View>
          <Svg height="120" width="120">
            <G rotation="-90" origin="60,60">
              {piesegments.map((item, index) => {
                const { value, color, cumulative } = item;
                return (
                  <Circle
                    key={index}
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={[
                      circumferences * (value / 100),
                      circumferences,
                    ]}
                    strokeDashoffset={(circumferences * -cumulative) / 100}
                    strokeLinecap="round"
                    fill="none"
                  />
                );
              })}
            </G>
            <SvgText
              x="60"
              y="60"
              textAnchor="middle"
              fontSize="20"
              fill="#fff"
              dy="6"
              fontWeight="bold"
              
            >
              20.1
            </SvgText>
          </Svg>
        </View>
      </View>
    </LinearGradient>
  );
};

export default pie;
