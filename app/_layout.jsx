// import { View, Text } from 'react-native';
// import React from 'react';
// import { Stack } from 'expo-router';
// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';
// import { NavigationContainer } from '@react-navigation/native';

// const Layout = () => {
//    const [fontsLoaded] = useFonts({
//      'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
//      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
//      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
//      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
//      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
//    });

//    if (!fontsLoaded) {
//      return <AppLoading />;
//    }

//    return (
//      <NavigationContainer>
//        <Stack>
//          <Stack.Screen name='index' options={{ headerShown: false }} />
//          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
//          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
//          <Stack.Screen name='Features' options={{ headerShown: false }} />
//        </Stack>
//      </NavigationContainer>
//    );
// };

// export default Layout;

import 'react-native-gesture-handler'; // Importing gesture handler
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

const Layout = () => {
   const [fontsLoaded] = useFonts({
     'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
     'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
     'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
     'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
     'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
   });

   if (!fontsLoaded) {
     return <AppLoading />;
   }

   return (
     <GestureHandlerRootView style={{ flex: 1 }}>
       
         <Stack>
           <Stack.Screen name="index" options={{ headerShown: false }} />
           <Stack.Screen name='(auth)' options={{ headerShown: false }} />
           <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
           <Stack.Screen name="(Features)" options={{ headerShown: false }} />
          
         </Stack>
      
     </GestureHandlerRootView>
   );
}

export default Layout;


