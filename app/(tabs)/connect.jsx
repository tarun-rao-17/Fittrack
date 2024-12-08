import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageSlider from "../(auth)/Components/imageslider";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const names = [
  "Tarun",
  "Varun",
  "hd",
  "John",
  "denley",
  "denver",
  "jonny",
  "sins",
  "prajwal",
  "bois",
];

export const image = [
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
  require("../../assets/editprofile.png"),
];

const Connect = () => {
  return (
    <ScrollView>
    
        <SafeAreaView>
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <Text style={{ fontFamily: "Poppins-Black", fontSize: 18,marginTop:10 }}>
                Connect with other users
              </Text>
              <View>
                <View>
                  <FlatList
                    data={image}
                    renderItem={({ item, index }) => (
                      <View
                        style={{
                          // height: 900,
                          marginTop: 20,
                          flex: 1,
                          width: 400,
                          borderRadius: 40,
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                          <TouchableOpacity>
                            <Image
                              source={item}
                              style={{ width: 38, height: 38 }}
                            />
                            </TouchableOpacity>


                            <Text
                              style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 16,
                                justifyContent: "center",
                              }}
                            >
                              {names[index]}
                            </Text>
                          </View>
                          <TouchableOpacity>
                          <View style={{ padding: 10, backgroundColor:"#D69C2F",
                                borderRadius:25 }}>
                            <Text
                              style={{
                                textTransform: "capitalize",
                                color: "#FFFFFF",
                                fontSize: 13,
                                fontFamily:'Poppins-Medium',
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                color:'#000000'
                                
                               
                              }}
                            >
                              {" "}
                              Follow
                            </Text>
                          </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 20 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
    </ScrollView>
  );
};

export default Connect;
