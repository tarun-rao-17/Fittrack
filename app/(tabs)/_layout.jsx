

// import { View, Text } from "react-native";
// import React from "react";
// import { Link, Stack, Tabs } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";
// import { Image } from "react-native";
// import { icons } from "../../constants"; // Importing icons
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import 'react-native-gesture-handler'; // Importing gesture handler
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import home from "./home";
// import connect from "./connect";
// import profile from "./profile";
// import posedection from "../Features/Posedetection";
// import SignIn from "../(auth)/signin";
// import { Drawer } from 'expo-router/drawer';



// const Tabicon = ({ icon, color, name }) => {
//   return (
//     <View style={{ justifyContent: "center", alignItems: "center", gap: 2,marginBottom:-20,padding:20 }}>
//       <Image
//         source={icon}
//         style={{
//           width: 22,
//           height: 22,
//           tintColor: color, 
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         resizeMode="contain"
//       />
//       <Text
//         style={{
//           color: color, 
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// };

// const Drawyerlayout = () => {
  

//   return(
//     <Drawer>

//       <Drawer.Screen name="home" component={home} options={{headerShown:false}}  /> 
//       <Drawer.Screen name="posedetection" component={posedection} options={{headerShown:false}} />

//     </Drawer>
//   )
// }


// const _layout = () => {
//   const Tabs = createBottomTabNavigator();

//   return (
//       <Tabs.Navigator
//         screenOptions={{
//           tabBarInactiveTintColor: "black",  
//           tabBarActiveTintColor: "blue",   
//           tabBarShowLabel: false,            
//           tabBarStyle: {
//             backgroundColor: "lightblue",    
//             borderTopWidth: 0,
//             height: 50,
//             border:'none',
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="home"
//           component={Drawyerlayout}
//           options={{
//             headerShown: false,
//             title: "Home",
//             tabBarIcon: ({ color }) => (     
//               <Tabicon icon={icons.home} color={color}  />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="connect"
//           component={connect}
//           options={{
//             headerShown: false,
//             title: "Connect",
//             tabBarIcon: ({ color }) => (  
//               <Tabicon icon={icons.plus} color={color} />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="profile"
//           component={profile}
//           options={{
//             headerShown: false,
//             title: "Profile",
//             tabBarIcon: ({ color }) => (    
//               <Tabicon icon={icons.profile} color={color}  />
//             ),
//           }}
//         />
//       </Tabs.Navigator>
//     );
//   };

//   export default _layout;




// import React from 'react';
// import { Drawer } from 'expo-router/drawer';
// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { Image, View, Text, TouchableOpacity } from 'react-native';
// import { router } from 'expo-router';
// import { icons } from '../../constants';





// const CustomDrawerContent = (props) => (
//   <DrawerContentScrollView {...props}>
//     <View style={{ 
//       padding: 20, 
//       borderBottomWidth: 1, 
//       borderBottomColor: '#e0e0e0',
//       flexDirection: 'row',
//       alignItems: 'center'
//     }}>
//       <Image 
//         source={require('../../assets/editprofile.png')} 
//         style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }} 
//       />
//       <View>
//         <Text style={{ fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
//         <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
//           <Text style={{ color: '#1587D0' }}>View Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//     <DrawerItemList {...props} />
//   </DrawerContentScrollView>
// );



// export default function Layout() {
//   return (
//     <Drawer 
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       screenOptions={{ headerShown: false }}
//     >
//       <Drawer.Screen name="home"/>
//       <Drawer.Screen name="connect"/>
//       <Drawer.Screen name="profile"/>

      
      
//     </Drawer>
 
//   );
// }


// import { View, Text } from "react-native";
// import React from "react";
// import { Link, Stack, Tabs } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";
// import { Image } from "react-native";
// import { icons } from "../../constants"; // Importing icons
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import 'react-native-gesture-handler'; // Importing gesture handler
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import home from "./home";
// import connect from "./connect";
// import profile from "./profile";
// import posedection from "../Features/Posedetection";
// import SignIn from "../(auth)/signin";
// import { Drawer } from 'expo-router/drawer';


// const Tabicon = ({ icon, color, name }) => {
//   return (
//     <View style={{ justifyContent: "center", alignItems: "center", gap: 2,marginBottom:-20,padding:20 }}>
//       <Image
//         source={icon}
//         style={{
//           width: 22,
//           height: 22,
//           tintColor: color, 
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         resizeMode="contain"
//       />
//       <Text
//         style={{
//           color: color, 
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// }


// const layout=()=>{
//   return(
//     <Tabs>
//     <Tabs.Screen
//       name="home"
      
//       options={{
//         headerShown: false,
//         title: "Home",
//         tabBarIcon: ({ color }) => (     
//           <Tabicon icon={icons.home} color={color}  />
//         ),
//       }}/>
//     <Tabs.Screen 
//     name="connect"
//     options={{
//       headerShown: false,
//       title: "Connect",
//       tabBarIcon: ({ color }) => (  
//         <Tabicon icon={icons.plus} color={color} />
//       ),
//     }}/>

//     <Tabs.Screen 
//     name="profile"
//     options={{
//       headerShown: false,
//       title: "Profile",
//       tabBarIcon: ({ color }) => (    
//         <Tabicon icon={icons.profile} color={color}  />
//       ),
//     }}/>

//     </Tabs>
//   )
// }
  

  // export default layout;


  // current


  import React from 'react';
import { Tabs } from 'expo-router';
import { Image, View, Text } from 'react-native';
import { icons } from '../../constants'; // Assuming you have a constants file for icons

const TabIcon = ({ icon, color, name }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: -20, padding: 20 }}>
    <Image
      source={icon}
      style={{ width: 22, height: 22, tintColor: color }}
      resizeMode="contain"
    />
    <Text style={{ color }}>{name}</Text>
  </View>
);







const Layout = () => (

  
  <Tabs>
    <Tabs.Screen
      name="home"
      options={{
        headerShown: false,
        title: 'Home',
        tabBarIcon: ({ color }) => <TabIcon icon={icons.home} color={color} name="Home" />,
      }}
    />
    <Tabs.Screen
      name="connect"
      options={{
        headerShown: false,
        title: 'Connect',
        tabBarIcon: ({ color }) => <TabIcon icon={icons.plus} color={color} name="Connect" />,
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        headerShown: false,
        title: 'Profile',
        tabBarIcon: ({ color }) => <TabIcon icon={icons.profile} color={color} name="Profile" />,
      }}
    />
  </Tabs>
);

export default Layout;





