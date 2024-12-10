import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import { router } from "expo-router";
import Weight from "./Components/Weight";
import Goal from "./Components/Goal";
import Activity from "./Components/Activity";
import Sleep from "./Components/Sleep";
import Numofdays from "./Components/Numofdays";
import Place from "./Components/Place";
import Diet from "./Components/Diet";
import Gender from "./Components/Gender";

const { height } = Dimensions.get("window"); // Get window height for dynamic adjustments
const ITEM_HEIGHT = 50; // Height of each number item
const CENTER_POSITION = height / 2; // Middle of the screen

const Onboarding = () => {
  const numscroll = Array.from({ length: 100 }, (_, i) => i + 1);
  const heightArray = Array.from({ length: 151 }, (_, i) => i + 100);
  const [selectedAge, setSelectedAge] = useState(1); // Default to 1
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const flatlistref = useRef(null);

  // Handle next button click
  const handleNext = () => {
    // Add height validation before moving to next slide
    if (activeIndex === 2 && (!selectedHeight || selectedHeight < 100 || selectedHeight > 250)) {
      // Optional: Add error handling or alert
      return;
    }

    if (activeIndex < 10) {
      swiperRef.current.scrollBy(1);
    } else {
      router.replace("/(auth)/signup");
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      swiperRef.current.scrollBy(-1);
    }
  };

  // Calculate dynamic font size and opacity based on position relative to the center
  const getItemStyle = (index) => {
    const position = index * ITEM_HEIGHT;
    const distanceFromCenter = Math.abs(
      position - scrollY - CENTER_POSITION + ITEM_HEIGHT / 2
    );
    const scale = Math.max(1 - distanceFromCenter / 300, 0.6); // Scale based on distance
    const opacity = Math.max(1 - distanceFromCenter / 300, 0.3); // Fade out based on distance

    return {
      fontSize: 30 * scale, // Base size of 30, scaled dynamically
      color: `rgba(0, 0, 0, ${opacity})`, // Adjust color based on opacity
      fontWeight: scale > 0.9 ? "bold" : "normal", // Bold if near center
    };
  };

  // Render each item in the number list
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedAge(item); // Update selected age
        flatlistref.current.scrollToIndex({ index, animated: true }); // Scroll to the clicked item
      }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: ITEM_HEIGHT,
      }}
    >
      <Text style={getItemStyle(index)}>{item}</Text>
    </TouchableOpacity>
  );

  const handleScrollEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrollY(offsetY);

    // Calculate selected index based on scroll position
    const selectedIndex = Math.round(offsetY / ITEM_HEIGHT);

    // Set selected age
    setSelectedAge(numscroll[selectedIndex]);
    setSelectedAge(heightArray[selectedIndex]);

    // Scroll to nearest item (if not perfectly aligned)
    flatlistref.current.scrollToIndex({ index: selectedIndex, animated: true });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      {/* Skip Button */}
      <View style={{ alignItems: "flex-end", padding: 20 }}>
        <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
          <Text
            style={{ fontSize: 15, fontFamily: "Poppins-Bold", color: "black" }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 5, width: "100%", backgroundColor: "#BADDFF" }} />

      {/* Swiper */}
      <View style={{ flex: 1 }}>
        <Swiper
          ref={swiperRef}
          onIndexChanged={(index) => setActiveIndex(index)}
          loop={false}
          autoplay={false}
        >
          {/* Previous slides remain the same */}
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: 120,
                }}
              >
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}>
                  Tell Us About Yourself!
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Gender />
          </View>

          {/* Age Slide - Remains the same */}
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                bottom: 120,
              }}
            >
              <View style={{ bottom: 25 }}>
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    fontSize: 22,
                    marginBottom: 30,
                  }}
                >
                  How Old Are You?
                </Text>
              </View>

              {/* Existing Age Picker FlatList */}
              <View
                style={{
                  height: 200,
                  justifyContent: "center",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                }}
              >
                <FlatList
                  ref={flatlistref}
                  data={numscroll}
                  keyExtractor={(item) => item.toString()}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                  snapToAlignment="center"
                  snapToInterval={ITEM_HEIGHT}
                  decelerationRate="fast"
                  onScroll={(event) => {
                    const offsetY = event.nativeEvent.contentOffset.y;
                    setScrollY(offsetY);
                    const selectedIndex = Math.min(
                      heightArray.length - 1,
                      Math.max(0, Math.floor(offsetY / ITEM_HEIGHT))
                    );
                    setSelectedAge(numscroll[selectedIndex]);
                  }}
                  onMomentumScrollEnd={handleScrollEnd}
                  contentContainerStyle={{ paddingVertical: 100 }}
                />
              </View>

              {/* Highlight lines */}
              <View
                style={{
                  position: "absolute",
                  top: 120,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#00C6FF",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 90,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#00C6FF",
                }}
              />
            </View>
          </View>

          {/* New Height Selection Slide */}
          <View
            style={{ 
              alignItems: "center", 
              justifyContent: "center", 
              flex: 1,
              paddingHorizontal: 20 
            }}
          >
            <View style={{ 
              justifyContent: "center", 
              alignItems: "center", 
              marginBottom: 30 
            }}>
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 22,
                  marginBottom: 20,
                  color: "#333"
                }}
              >
                What is Your Height?
              </Text>
            </View>

            <View 
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingVertical: 10
              }}
            >
              <TextInput
                placeholder="Enter height in cm"
                keyboardType="numeric"
                value={selectedHeight ? selectedHeight.toString() : ''}
                onChangeText={(text) => {
                  // Validate input to ensure only numbers
                  const numericText = text.replace(/[^0-9]/g, '');
                  setSelectedHeight(numericText ? parseInt(numericText) : null);
                }}
                style={{
                  flex: 1,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 18,
                  color: '#333'
                }}
              />
              <Text 
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: '#888',
                  marginLeft: 10
                }}
              >
                cm
              </Text>
            </View>

            {/* Validation message */}
            {selectedHeight && (selectedHeight < 100 || selectedHeight > 250) && (
              <Text 
                style={{
                  color: 'red',
                  fontFamily: 'Poppins-Regular',
                  marginTop: 10,
                  fontSize: 14
                }}
              >
                Please enter a valid height between 100-250 cm
              </Text>
            )}
          </View>

          {/* Remaining slides */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Weight />
          </View>
          <View>
            <Goal />
          </View>
          <View>
            <Activity />
          </View>
          <View>
            <Sleep />
          </View>
          <View>
            <Numofdays />
          </View>
          <View>
            <Place />
          </View>
          <View>
            <Diet />
          </View>
        </Swiper>
      </View>

      {/* Navigation Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingBottom: 70,
        }}
      >
        {activeIndex !== 0 ? (
          <TouchableOpacity
            onPress={handlePrev}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              backgroundColor: "grey",
              width: 120,
              height: 50,
              top: -18,
            }}
          >
            <Text style={{ fontFamily: "Poppins-Black", color: "white" }}>
              Back
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 120 }} />
        )}

        <View style={{ top: -18 }}>
          <TouchableOpacity onPress={handleNext}>
            <LinearGradient
              colors={["#1586D0", "#08BDC8"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{
                width: 120,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Black",
                  color: "white",
                  padding: 15,
                }}
              >
                {activeIndex === 10 ? "Finish" : "Next"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};

export default Onboarding;