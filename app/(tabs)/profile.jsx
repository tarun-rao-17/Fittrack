import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { signOut } from "firebase/auth";
import { router, Link } from "expo-router";
import { firebase_auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import Accoount from "../../Components2/Accoount";
import Section from "../../Components2/Section";
import Custiomcomp2 from "../../Components2/customcomp2";
import { ChevronRight, User, Award, History, Activity, Bell, Mail, Shield, Settings } from 'lucide-react-native';


const facts = ["180cm", "80kg", "19yo"];
const data = ["Height", "Weight", "Age"];

const Profile = () => {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await signOut(firebase_auth);
      Alert.alert("You have been successfully logged out.");
      router.replace("/signin");
    } catch (error) {
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  return (
    <ScrollView>
    <SafeAreaView
 
    >
      <View >
        <View
          style={{ justifyContent: "space-between",  }}
        >
          <TouchableOpacity onPress={logout}>
            <Image
              source={icons.logout}
              style={{
                width: 22,
                height: 32,
                marginLeft: 300,
                marginTop: 30,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: -45, gap: 10 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                marginTop: 20,
                fontSize: 18,
                alignItems: "center",
              }}
            >
              Your Profile
            </Text>
          </View>
          <Image
            source={require("../../assets/editprofile.png")}
            style={{ width: 60, height: 60, margin: "auto" }}
            resizeMode="contain"
          />
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginTop: 20,
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 20,
                    width: 90,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: 15,
                      textAlign: "center",
                      color:'#B9B5EC'
                    }}
                  >
                    {facts[index]}
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins-SemiBold", fontSize: 12,textAlign: "center",color:'gray' }}
                  >
                    {item}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              gap: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
      
      </View>
      <View style={{marginTop:30,justifyContent:'center',width:300,marginLeft:40}}>
          <Section title="Account">
            <Custiomcomp2 icon={<User size={20} color="#666"/>}
            title="Personal Data"
            rightEle={<ChevronRight size={20} color="#666"/>}
            />
            <Custiomcomp2 icon={<Award size={20} color="#666"/>}
            title="Achievements"
            rightEle={<ChevronRight size={20} color="#666"/>}
            />
            <Custiomcomp2 icon={<History size={20} color="#666"/>}
            title="Account History"
            rightEle={<ChevronRight size={20} color="#666"/>}
            />
             <Custiomcomp2 icon={<History size={20} color="#666"/>}
            title="Account History"
            rightEle={<ChevronRight size={20} color="#666"/>}
            />
          </Section>

          <Section title="Others">
            <Custiomcomp2 icon={<Mail size={20} color="#666"/>}
            title="Contact Us"
            rightEle={<ChevronRight size={20} color="#666"/>}
            />
            <Custiomcomp2 icon={<Shield size={20} color="#666"/>}
            title="Privacy Policy"
            rightEle={<ChevronRight size={20} color="#666"/>}
            />

<Custiomcomp2 icon={<Settings size={20} color="#666"/>}
            title="Settings"
            rightEle={<ChevronRight size={20} color="#666"/>}
            />


          </Section>
          
        </View>
       


    </SafeAreaView>
    </ScrollView>
    
  );
};

export default Profile;
