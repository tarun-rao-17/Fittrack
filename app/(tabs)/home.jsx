// import {
//   View,
//   Text,
//   Alert,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
// } from "react-native";
// import React from "react";
// import { BackHandler } from "react-native";
// import { router, useFocusEffect, useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Image } from "react-native";
// import PieChartExample from "../(auth)/Components/Pie";
// import Status from "../../Components2/Status/Status";
// import LatestWorkouts from "../../Components2/LatestWorkouts";
// import { useNavigation,DrawerActions } from "@react-navigation/native";


// const Home = () => {
//   const navigation = useNavigation();
  

 

//   const handleBack = () => {
//     Alert.alert("Exit App", "Are you sure you want to exit?", [
//       {
//         text: "Cancel",
//         onPress: () => null,
//         style: "cancel",
//       },
//       {
//         text: "Exit",
//         onPress: () => BackHandler.exitApp(),
//       },
//     ]);
//     return true;
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       BackHandler.addEventListener("hardwareBackPress", handleBack);
//       return () => {
//         BackHandler.removeEventListener("hardwareBackPress", handleBack);
//       };
//     }, [])
//   );

//   return (
//     <ScrollView style={{ backgroundColor: "#E5E5E5" }}>
//       <SafeAreaView style={{ marginTop: 30, backgroundColor: "#E5E5E5" }}>
//         <View style={{ gap: 20, backgroundColor: "#E5E5E5" }}>
//           <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//               paddingHorizontal: 20,
//             }}
//           >
//             {/* <TouchableOpacity onPress={open} >
//               <Ionicons name="menu" size={30} color="#000" />
//             </TouchableOpacity> */}

//             <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}>
//               <Image
//                 source={require("../../assets/editprofile.png")}
//                 style={{
//                   width: 45,
//                   height: 40,
//                 }}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={{ marginTop: 20, left: 19 }}>
//           <Text style={{ color: "#ADA4A5" }}>Welcome back, </Text>
//           <Text style={{ fontSize: 20, fontFamily: "Poppins-Bold" }}>
//             John Doe
//           </Text>
//         </View>

//         <PieChartExample />

//         <View
//           style={{
//             padding: 15,
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginTop: 20,
//             alignItems: "center",
//             backgroundColor: "#D9D9D9",
//             width: 350,
//             borderRadius: 20,
//             margin: "auto",
//           }}
//         >
//           <View style={{ left: 0 }}>
//             <Text style={{ fontFamily: "Poppins-SemiBold" }}>Today Target</Text>
//           </View>
//           <TouchableOpacity
//             onPress={() => router.push("/Features/Todaysactivity")}
//           >
//             <View
//               style={{
//                 right: 0,
//                 padding: 10,
//                 backgroundColor: "#1587D0",
//                 borderRadius: 20,
//                 paddingHorizontal: 20,
//               }}
//             >
//               <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
//                 Check
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View>
//           <Status />
//         </View>

//         <View>
//           <LatestWorkouts />
//         </View>
//       </SafeAreaView>
//       <StatusBar hidden={true} />
//     </ScrollView>
//   );
// };

// export default Home;


import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { BackHandler } from "react-native";
import { router, useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import PieChartExample from "../(auth)/Components/Pie";
import Status from "../../Components2/Status/Status";
import LatestWorkouts from "../../Components2/LatestWorkouts";

const { width, height } = Dimensions.get('window');

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slideAnim = React.useRef(new Animated.Value(-width * 0.7)).current;

  const handleBack = () => {
    Alert.alert("Exit App", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Exit",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", handleBack);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", handleBack);
      };
    }, [])
  );

  const toggleMenu = () => {
    const toValue = isMenuOpen ? -width * 0.7 : 0;
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { 
      title: 'Home', 
      icon: 'home-outline', 
      route: '/(tabs)/home' 
    },
    { 
      title: 'Profile', 
      icon: 'person-outline', 
      route: '/(tabs)/profile' 
    },
    { 
      title: 'PoseDetection', 
      icon: 'walk-outline', 
      route: '/(Features)/Posedetection' 
    },
    {
      title:'Yoga',
      icon:'body-outline',
      route:'/(Features)/Yoga'
    },
    {
      title:'Meditation',
      icon:'flower-outline',
      route:'/(Features)/meditation'
    }


  ];

  const handleMenuItemPress = (route) => {
    toggleMenu();
    setTimeout(() => {
      router.push(route);
    }, 50);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ backgroundColor: "#E5E5E5" }}>
        <SafeAreaView style={{ marginTop: 30, backgroundColor: "#E5E5E5" }}>
          <View style={{ gap: 20, backgroundColor: "#E5E5E5" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
              }}
            >
              <TouchableOpacity onPress={toggleMenu}>
                <Ionicons name="menu" size={30} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}>
                <Image
                  source={require("../../assets/editprofile.png")}
                  style={{
                    width: 45,
                    height: 40,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Rest of your existing home screen content */}
          <View style={{ marginTop: 20, left: 19 }}>
            <Text style={{ color: "#ADA4A5" }}>Welcome back, </Text>
            <Text style={{ fontSize: 20, fontFamily: "Poppins-Bold" }}>
              John Doe
            </Text>
          </View>

          <PieChartExample />

          <View
            style={{
              padding: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
              backgroundColor: "#D9D9D9",
              width: 350,
              borderRadius: 20,
              margin: "auto",
            }}
          >
            <View style={{ left: 0 }}>
              <Text style={{ fontFamily: "Poppins-SemiBold" }}>Today Target</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/(Features)/Todaysactivity")}
            >
              <View
                style={{
                  right: 0,
                  padding: 10,
                  backgroundColor: "#1587D0",
                  borderRadius: 20,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
                  Check
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Status />
          </View>

          <View>
            <LatestWorkouts />
          </View>
        </SafeAreaView>
        <StatusBar hidden={true} />
      </ScrollView>

      {/* Side Menu */}
      <Animated.View 
        style={[
          styles.sideMenu, 
          { 
            transform: [{ translateX: slideAnim }],
          }
        ]}
      >
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={toggleMenu}
        >
          <Ionicons name="close" size={30} color="#000" />
        </TouchableOpacity>

        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item.route)}
          >
            <Ionicons 
              name={item.icon} 
              size={24} 
              color="#1587D0" 
              style={styles.menuItemIcon}
            />
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      {isMenuOpen && (
        <TouchableOpacity 
          style={styles.overlay} 
          onPress={toggleMenu}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.7,
    height: height,
    backgroundColor: '#E5E5E5',
    paddingTop: 50,
    paddingHorizontal: 20,
    zIndex: 1000,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
  },
  menuItemIcon: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  }
});

export default Home;