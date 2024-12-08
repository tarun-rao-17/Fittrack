import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { firebase_auth } from "../../firebase";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const auth = firebase_auth;

  const signUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      router.push("/home");
    } catch (error) {
      alert(`Error signing up: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={{
              flex: 1,
              paddingHorizontal: 30,
              paddingTop: 30,
              alignItems: "center",
              justifyContent: "center",
              
            }}>
              <View style={{bottom:60}}>
              <Text style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                color: "black",
                marginTop: 10,
                maxWidth: 300,
                textAlign: 'center'
              }}>
                Hey There,
              </Text>
              <Text style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                color: "black",
                textAlign: 'center',
                marginBottom: 30
              }}>
                Create an Account
              </Text>
              </View>
              
              <View style={{
                width: '100%',
                maxWidth: 315,
                gap: 20

              }}>
                <View style={{gap:40}}>
                <TextInput
                  placeholder="Enter your Name"
                  style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 20,
                    backgroundColor: '#E5E5E5',
                    color: 'black',
                    paddingHorizontal: 20,
                  }}
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
                <TextInput
                  placeholder="Enter your Email"
                  style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 20,
                    backgroundColor: '#E5E5E5',
                    color: 'black',
                    paddingHorizontal: 20,
                  }}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
                <TextInput
                  placeholder="Enter your Password"
                  style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 20,
                    backgroundColor: '#E5E5E5',
                    color: '#ADA4A5',
                    paddingHorizontal: 20,
                  }}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  secureTextEntry={true}
                />
                </View>
                
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                  <TouchableOpacity
                    style={{
                      width: 24,
                      height: 24,
                      borderWidth: 2,
                      borderColor: '#000',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                    onPress={() => setChecked(!checked)}
                  >
                    {checked && <Text style={{ fontSize: 16, color: '#000' }}>✓</Text>}
                  </TouchableOpacity>
                  <Text style={{ color: '#ADA4A5', fontSize: 13 }}>
                    I agree to the Terms and Conditions
                  </Text>
                </View>
                
                <TouchableOpacity onPress={signUp}>
                  <LinearGradient
                    colors={["#1586D0", "#08BDC8"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={{
                      borderRadius: 20,
                      width: '100%',
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                    }}
                  >
                    <Text style={{ fontFamily: "Poppins-Bold", color: 'white' }}>
                      Register  >
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                
                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 20,
                }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                  <Text style={{
                    color: '#ADA4A5',
                    fontSize: 13,
                    marginHorizontal: 10,
                  }}>or</Text>
                  <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                
                <Text style={{
                  fontSize: 13,
                  color: "grey",
                  textAlign: 'center',
                }}>
                  Already have an account?{" "}
                  <Link href="./signin" style={{ textDecorationLine: "none" }}>
                    <Text style={{ fontFamily: "Poppins-Black", color: "black" }}>
                      Sign in
                    </Text>
                  </Link>
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <StatusBar hidden={true} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SignUp;