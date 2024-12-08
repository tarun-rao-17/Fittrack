import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [35, 65, 45, 55, 75, 35, 60],
      colors: [
        (opacity = 1) => '#A7B8FF',  // Sunday (blue)
        (opacity = 1) => '#E4AFFF',  // Monday (purple)
        (opacity = 1) => '#A7B8FF',  // Tuesday (blue)
        (opacity = 1) => '#E4AFFF',  // Wednesday (purple)
        (opacity = 1) => '#A7B8FF',  // Thursday (blue)
        (opacity = 1) => '#E4AFFF',  // Friday (purple)
        (opacity = 1) => '#A7B8FF',  // Saturday (blue)
      ]
    }
  ]
};

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundColor: "white",
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  decimalPlaces: 0,
  
  color: (opacity = 1) => `rgba(167, 184, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(134, 134, 134, ${opacity})`,
  style: {
    borderRadius: 8,
  },
  barPercentage: 0.7,
  borderRadius: 10,
//   propsForBackgroundLines: {
//     strokeWidth: 1,
//     stroke: "rgba(240, 240, 240, 0.8)",
//   }
formatTopBarValue: () => ""
};

const ActivityProgress = () => {
  return (
    <View style={{
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: '600',
          color: '#333'
        }}>
          Activity Progress
        </Text>
        <TouchableOpacity style={{
          backgroundColor: '#A7B8FF',
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 20
        }}>
          <Text style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '500'
          }}>
            Weekly
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        alignItems: 'center'
      }}>
        <BarChart
          data={data}
          width={screenWidth - 60}
          height={200}
          chartConfig={chartConfig}
          withHorizontalLabels={false}
          borderRadius={20}
            withInnerLines={false}
            
          
          showBarTops={false}
          fromZero={true}
          flatColor={true}
          withCustomBarColorFromData={true}
          style={{
            marginLeft: -20,
            borderRadius: 20
          }}
        />
      </View>
    </View>
  );
};

export default ActivityProgress;