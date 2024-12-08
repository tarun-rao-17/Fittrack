


// import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { LinearGradient } from "expo-linear-gradient";
// import { Image } from "react-native";
// import { Link, useRouter } from "expo-router";
// import { firebase_auth } from "../../firebase";
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import Toast from "react-native-toast-message"; 
// import { GestureHandlerRootView } from "react-native-gesture-handler";


// const SignIn = () => {
//   const router = useRouter();
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [loading, setLoading] = React.useState(false);
//   const[spinner,setSpinner]=React.useState(false);
//   const auth = firebase_auth;

//   const signIn = async () => {

//     setLoading(true);
//     try {
//       setSpinner(true);
//       const response = await signInWithEmailAndPassword(auth, email, password);
//       router.push("/home");
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showtoast = () => {
//     Toast.show({
//       type: "success",
//       text1: "Password reset link has been sent to your email",
//       visibilityTime: 4000,
//       autoHide: true,
//     });
//   }

//   const reset = async () => {
//     if (email.trim().length > 0) { 
//       try {
//         await sendPasswordResetEmail(auth, email);
//         alert("Password reset link has been sent to your email");
//       } catch (error) {
//         alert("An error occurred while sending the reset link");
//       }
//     } else {
//       alert("Please enter your email");
//     }
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1,backgroundColor:'#FFFFFF' }}>
//  <SafeAreaView style={{flex: 1,backgroundColor:'#FFFFFF',marginTop:30 }}>
//       <View
//         style={{
//           height: "100%",
//           paddingHorizontal: 30,
//           paddingTop: 30,
//           alignItems: "center",
//         }}
//       >
      
//         <View style={{ justifyContent: "center", alignItems: "center" }}>
//           <Text
//             style={{
//               fontSize: 16,
//               fontFamily: "Poppins-Bold",
//               color: "black",
//               marginTop: 10,
//               maxWidth: 300,
//               marginLeft: 20,
//             }}
//           >
//             Sign in to your account
//           </Text>
//           <View
//             style={{
//               padding: 65,
//               backgroundColor: "lightblue",
//               marginTop: 30,
//               borderRadius: 20,
//               gap: 40,
//               maxWidth: 350,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <TextInput
//               placeholder="Enter your Email"
//               style={{
//                 width: 250,
//                 padding: 10,
//                 backgroundColor: "lightyellow",
//                 borderRadius: 20,
//               }}
//               value={email} // Bind value to email state
//               onChangeText={setEmail} // Update email state
//             />
//             <TextInput
//               placeholder="Enter your Password"
//               style={{
//                 width: 250,
//                 padding: 10,
//                 backgroundColor: "lightyellow",
//                 borderRadius: 20,
//               }}
//               value={password} // Bind value to password state
//               onChangeText={setPassword} // Update password state
//               secureTextEntry={true} // Make it a password field
//             />
//             <View
//               style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: 10,
//               }}
//             >
//               <View
//                 style={{
//                   backgroundColor: "orange",
//                   borderRadius: 20,
//                   width: 250,
//                   alignItems: "center",
//                   justifyContent: "center",
//                   padding: 10,
//                 }}
//               >
//                 <TouchableOpacity onPress={signIn}>
//                   <Text style={{ fontFamily: "Poppins-Bold" }}>Submit</Text>
//                 </TouchableOpacity>
//               </View>
//               <Text style={{ fontSize: 13, color: "grey", marginTop: 10 }}>
//                 Don't have an account?{" "}
//                 <Link href="./signup">
//                   <Text style={{ fontFamily: "Poppins-Black", color: "black" }}>
//                     Sign up
//                   </Text>
//                 </Link>
//               </Text>
//               <TouchableOpacity
//                 style={{
//                   fontFamily: "Poppins-Light",
//                   color: "blue",
//                   marginRight: 90,
//                   marginTop: -10,
//                 }}
//                 onPress={reset}
//               >
//                 <Text style={{ fontSize: 12 }}>Forgot password?</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//       <StatusBar hidden={true} />
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// export default SignIn;







import { View, Text, TextInput, TouchableOpacity, SafeAreaView,KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { firebase_auth } from "../../firebase";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { CheckBox } from "@react-native-community/checkbox";
import { Platform } from "react-native";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const[checked,setChecked]=useState(false)
  const router = useRouter();
  const auth = firebase_auth;

  const signIn = async () => {

        setLoading(true);
        try {
          
          const response = await signInWithEmailAndPassword(auth, email, password);
          router.push("/home");
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        } finally {
          setLoading(false);
        }
      };

  return (
    <GestureHandlerRootView style={{ flex: 1,backgroundColor:'#FFFFFF' }}>
      <SafeAreaView style={{backgroundColor:'#FFFFFF',marginTop:30,
      }}>
         <KeyboardAvoidingView
          
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        
   
        <View
          style={{
            height: "100%",
            paddingHorizontal: 30,
            paddingTop: 30,
            alignItems: "center",
          }}
        >
         
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                color: "black",
                marginTop: 10,
                maxWidth: 300,
                marginLeft: 20,
              }}
            >
              Hey There, 
            </Text>
            <Text style={{ fontSize: 16,
                fontFamily: "Poppins-Bold",
                color: "black",textAlign:'center',margin:'auto'}}>Sign in to your Account</Text>
            <View
              style={{
                padding: 65,
                
                marginTop: 30,
                borderRadius: 20,
                gap: 40,
                maxWidth: 350,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            
              <TextInput
                placeholder="Enter your Email"
                style={{
                  width:315,height:48,borderRadius:20,backgroundColor:'#E5E5E5',color:'black',paddingRight:20,paddingLeft:20
                }}
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <TextInput
                placeholder="Enter your Password"
                style={{
                  width:315,height:48,borderRadius:20,backgroundColor:'#E5E5E5',color:'#ADA4A5',paddingRight:20,paddingLeft:20
                }}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
              />
               <View style={{flexDirection: 'row',justifyContent:'flex-start',
    alignItems: 'flex-start',marginLeft:-50
    }}>
      <TouchableOpacity
        style={{ width: 24,
          height: 24,
          borderWidth: 2,
          borderColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,}}
        onPress={() => {setChecked(!checked)}}
        
      >
        {checked&&<Text style={{   fontSize: 16,
    color: '#000',}}>✓</Text>}
    
      </TouchableOpacity>
      <Text style={{marginLeft:10,color:'#ADA4A5',fontSize:13}}>I agree to the Terms and Conditions</Text>
      
    </View>
              
             
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                 
                <TouchableOpacity onPress={signIn}>
                <LinearGradient
        colors={["#1586D0", "#08BDC8"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ borderRadius:20 }}
      >
                <View
                  style={{
                    
                    borderRadius: 20,
                    width: 250,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  
                    <View style={{}}>
                    <Text style={{ fontFamily: "Poppins-Bold",color:'white' }}>Sign in  > </Text>
                    </View>
                </View>
                  </LinearGradient>
                  </TouchableOpacity>
                  
                <View style={{display: "flex",
          flexDirection: "row",
          alignItems: "center",
          
          rowGap: 3,}}>
                  <View style={{width:'70%',height:1,backgroundColor:'black',marginTop:10}}/>
                  <Text style={{color:'#ADA4A5',fontSize:13,marginLeft:10,marginRight:10}}>or</Text>
                  <View style={{width:'70%',height:1,backgroundColor:'black',marginTop:10}}/>


                </View>
                <View>

                </View>


                <View style={{marginLeft:-20}} >
                <Text style={{ fontSize: 13, color: "grey", marginTop: 10 }} numberOfLines={2}>
                 Dont have an Account?{" "}
                  <Link href="./signup" style={{ textDecorationLine: "none" }}>
                    <Text
                      style={{ fontFamily: "Poppins-Black", color: "black" }}
                    >
                      Sign up
                    </Text>
                  </Link>
                  

                </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        </KeyboardAvoidingView>
        <StatusBar hidden={true} />
        </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SignUp;





