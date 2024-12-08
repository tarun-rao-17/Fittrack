// import { Dimensions, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import React, { useCallback, useEffect, useMemo, useRef } from "react";
// import { useState } from "react";

// const ITEM_WIDTH = 60;
// const Weight = () => {
//   const [weight, setWeight] = useState(10);
//   const weightRange = useMemo(()=>Array.from({ length: 180 }, (_, i) => i + 1),[]);
//   const scrollViewRef = useRef(null);

//   const handleScroll = useCallback((event) => {
//     const offsetX = event.nativeEvent.contentOffset.x;
//     const selectedIndex = Math.round(offsetX / ITEM_WIDTH);
  
//     setWeight(weightRange[selectedIndex]);
//   },[weightRange]);

//   const scrollToWeight = useCallback((weightVal) => {
//     const windowWidth = Dimensions.get("window").width;
//     const centeroffset = (windowWidth-ITEM_WIDTH) / 2;     
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({
//         x: (weightVal - 1) * ITEM_WIDTH-centeroffset,
//         animated: true,
//       });
      
//     }
//     setWeight(weightVal);
//   },[]);

//   const renderScroll = useCallback(({item,index}) => {
//     <TouchableOpacity  key={index} style={styles.weightItem} onPress={()=>{scrollToWeight(item)}}>
            
//               <Text
//                 style={[
//                   styles.weightText,
//                   item === weight && styles.selectedWeightText,
//                 ]}
//               >
//                 {item}
//               </Text>
//               <View
//                 style={[
//                   styles.weightBar,
//                   item === weight && styles.selectedWeightBar,
//                 ]}
//               />
//           </TouchableOpacity>
//   })

//   useEffect(() => {
//     // Center the initial weight when the component mounts
//     scrollToWeight(weight);
//   }, []);

 

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>What is Your Weight?</Text>
//       <Text style={styles.weightDisplay}>{weight}kg</Text>
//       <View style={styles.scrollContainer}>
       
//         <ScrollView
//           ref={scrollViewRef}
//           horizontal={true}
//           showsHorizontalSchandrollIndicator={false}
//           onScroll={handleScroll}
//           scrollEventThrottle={16}
//           snapToInterval={ITEM_WIDTH}
//           decelerationRate="fast"
//           contentContainerStyle={{
//             paddingHorizontal:
//               Dimensions.get("window").width / 2 - ITEM_WIDTH / 2,
//           }}
//         >
//           {weightRange.map((item,index)=>renderScroll(item,index))}
//         </ScrollView>
      
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontFamily: "Poppins-Bold",
//     fontSize: 22,
//     marginBottom: 30,
//   },
//   weightDisplay: {
//     fontFamily: "Poppins-SemiBold",
//     fontSize: 19,
//     marginBottom: 20,
//   },
//   scrollContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     height: 100,
//     marginBottom: 20,
//   },
  
//   weightItem: {
//     width: ITEM_WIDTH,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   weightText: {
//     fontSize: 16,
//     color: "#ccc",
//   },
//   selectedWeightText: {
//     fontWeight: "bold",
//     color: "#0072FF",
//   },
//   weightBar: {
//     width: 2,
//     height: 30,
//     backgroundColor: "#e0e0e0",
//   },
//   selectedWeightBar: {
//     height: 50,
//     backgroundColor: "#00C6FF",
//   },
// });

// export default Weight;

import { Dimensions, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ITEM_WIDTH = 60;

const Weight = () => {
  const [weight, setWeight] = useState(10);
  const weightRange = useMemo(() => Array.from({ length: 180 }, (_, i) => i + 1), []);
  const scrollViewRef = useRef(null);

  const handleScroll = useCallback((event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.round(offsetX / ITEM_WIDTH);
    setWeight(weightRange[selectedIndex]);
    console.log('Scrolled to index:', selectedIndex, 'Weight:', weightRange[selectedIndex]); // Debugging
  }, [weightRange]);

  const scrollToWeight = useCallback((weightVal) => {
    const windowWidth = Dimensions.get("window").width;
    const centerOffset = (windowWidth - ITEM_WIDTH) / 2;

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: (weightVal - 1) * ITEM_WIDTH - centerOffset,
        animated: true,
      });
    }
    setWeight(weightVal);
  }, []);

  const renderScroll = useCallback((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.weightItem}
        onPress={() => scrollToWeight(item)}
      >
        <Text
          style={[
            styles.weightText,
            item === weight && styles.selectedWeightText,
          ]}
        >
          {item}
        </Text>
        <View
          style={[
            styles.weightBar,
            item === weight && styles.selectedWeightBar,
          ]}
        />
      </TouchableOpacity>
    );
  }, [weight, scrollToWeight]);

  useEffect(() => {
    scrollToWeight(weight);
  }, [scrollToWeight]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is Your Weight?</Text>
      <Text style={styles.weightDisplay}>{weight}kg</Text>
      <View style={styles.scrollContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          contentContainerStyle={{
            paddingHorizontal: Dimensions.get("window").width / 2 - ITEM_WIDTH / 2,
          }}
        >
          {weightRange.map((item, index) => renderScroll(item, index))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
   top: -120,
   marginBottom:30,
  },
  weightDisplay: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 19,
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    marginBottom: 20,
  },
  weightItem: {
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  weightText: {
    fontSize: 16,
    color: "#ccc",
  },
  selectedWeightText: {
    fontWeight: "bold",
    color: "#0072FF",
  },
  weightBar: {
    width: 2,
    height: 30,
    backgroundColor: "#e0e0e0",
  },
  selectedWeightBar: {
    height: 50,
    backgroundColor: "#00C6FF",
  },
});

export default Weight;
