// import { StyleSheet, Text, View, SafeAreaView, FlatList,TouchableOpacity, ScrollView } from "react-native";
// import React from "react";
// import { Image } from "react-native";
// import { useState } from "react";


// const jim = [
//   "PoseDetection",
//   "Gamification",
//   "Leaderboard",
//   "Alarmy",
//   "Outdoor Activities",
//   "Sleep Tracker",
// ];
// export const featureimages = [
//   require("../../../assets/posedetection.png"),
//   require("../../../assets/gamification.png"),
//   require("../../../assets/Leaderboard.jpg"),
//   require("../../../assets/Alarmy.webp"),
//   require("../../../assets/outdooractivities.jpg"),
//   require("../../../assets/sleeptracker.webp"),
// ];

// const Gyms = () => {
//   return (

//     <SafeAreaView>
//       <View
//         style={{
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: 27,
//         }}
//       >
//         <Text style={{fontSize:18,fontFamily:'Poppins-Bold',color:'black'}}>Our Features</Text>
//         <View>
//           <FlatList
//             data={featureimages}
//             renderItem={({ item, index }) => (
//               <TouchableOpacity style={{marginTop:25}}>
//                 <View
//                   style={{
//                     width: 200,
//                     height: 290,
//                     margin: 10,
//                     padding: 20,
//                     backgroundColor: "#2D3436",
//                     borderRadius: 20,
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Image
//                     source={item}
//                     style={{ width: 180, height: 180, borderRadius: 20 }}
//                     resizeMode="cover"
//                   />
//                   <Text style={{marginTop:10,color:'#55EFC4',fontFamily:'Poppins-Bold',fontSize:15}}>{jim[index]}</Text>
//                 </View>
//               </TouchableOpacity>
//             )}
//             keyExtractor={(item, index) => index.toString()}
//             horizontal={false}
//             contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:12}}
//             showsHorizontalScrollIndicator={false}
//             showsVerticalScrollIndicator={true}
        

//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Gyms;



import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const jim = [
  "PoseDetection",
  "Gamification",
  "Leaderboard",
  "Alarmy",
  "Outdoor Activities",
  "Sleep Tracker",
];

export const featureimages = [
  require("../../../assets/posedetection.png"),
  require("../../../assets/gamification.png"),
  require("../../../assets/Leaderboard.jpg"),
  require("../../../assets/Alarmy.webp"),
  require("../../../assets/outdooractivities.jpg"),
  require("../../../assets/sleeptracker.webp"),
];

const Gyms = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 27,
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Bold', color: 'black' }}>Our Features</Text>
        <View>
          <FlatList
            data={featureimages}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{ marginTop: 25 }}>
                <View
                  style={{
                    width: 160,
                    height: 200,
                    margin: 10,
                    padding: 15,
                    backgroundColor: "#2D3436",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item}
                    style={{ width: 120, height: 120, borderRadius: 20 }}
                    resizeMode="cover"
                  />
                  <Text
                    style={{
                      marginTop: 10,
                      color: '#55EFC4',
                      fontFamily: 'Poppins-Bold',
                      fontSize: 15,
                    }}
                  >
                    {jim[index]}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Gyms;
