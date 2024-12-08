import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import walking from '../../assets/walking.png'
import water from '../../assets/water-bottle.png'
import { TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import ActivityProgress from "../(auth)/Components/Activityprogress";
import Section from "../../Components2/Section";
const facts = ["8L", "2400"];
const words = ["Water Intake", "Foot Steps"];
const icons1 = [water, walking];
import { ChevronRight, User, Award, History, Activity, Bell, Mail, Shield, Settings } from 'lucide-react-native';

import Customcomp2 from "../../Components2/customcomp2";
import { icons } from "../../constants/icons";


const Todaysactivity = () => {
  return (
    <ScrollView>
    <SafeAreaView style={{ backgroundColor: "#E5E5E5", height: "100%" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          margin:'auto'
        }}
      >
        <View>
          <Text style={{ fontSize: 17, fontFamily: "Poppins-Bold" }}>
            Activity Tracker
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              alignContent: "flex-start",
              justifyContent: "flex-start",
              right: 10,
              marginTop: 30,
              justifyContent:'center',
              alignItems:'center',
              margin:'auto',
              marginLeft: 10,
            }}
          >
            <View
              style={{
                padding: 20,
                backgroundColor: "#D2CFF3",
                height: 180,
                borderRadius: 20,

              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                  gap: 150,
                }}
              >
                <View>
                  <Text style={{ fontFamily: "Poppins-Bold", fontSize: 15 }}>
                    Todays target
                  </Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require("../../assets/plus.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{}}>
                <FlatList
                  data={facts}
                  renderItem={({ item, index }) => (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <View
                        style={{
                          marginTop: 20,
                          backgroundColor: "white",
                          padding: 10,
                          borderRadius: 20,
                          width: 90,
                          
                          position: "relative",
                          width: 120,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        //   justifyContent: "space-between"
                        }}
                      >
                        <View>
                            <Image
                                source={icons1[index]}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        
                        
                        <Text
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            left: 0,
                            textAlign: "center",
                            fontSize: 15,
                            marginTop: 10,
                            color: "#B9B5EC",
                          }}
                        >
                          {item}
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Poppins-SemiBold",
                            fontSize: 10,
                            textAlign: "center",
                            color: "black",
                            marginTop: 23,
                            left:5
                        
                          }}
                        >
                          {words[index]}
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
          </View>
        </View>
        <View>

              <View style={{marginTop:30}}>
                <ActivityProgress/>
              </View>
              <View style={{marginTop:20}}>
                <Section title="Latest Workout">
                  <Customcomp2 icon={<FontAwesome5 name="running" size={20} color="#666"/>}
                  title="Running"
                  rightEle={<ChevronRight size={20} color="#666" />}
                  
                  />
                  <Customcomp2 icon={<FontAwesome5 name="utensils" size={20} color="#666" />}
                  title="Eat"
                  rightEle={<ChevronRight size={20} color="#666" />}
                  
                  />
                
                </Section>
              </View>

       

        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Todaysactivity;
