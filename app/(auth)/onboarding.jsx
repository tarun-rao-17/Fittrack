import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
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
import Preference from "./Components/Preference";
import Diet from "./Components/Diet";
import Gender from "./Components/Gender";

const { height } = Dimensions.get("window"); // Get window height for dynamic adjustments
const ITEM_HEIGHT = 50; // Height of each number item
const CENTER_POSITION = height / 2; // Middle of the screen

const Onboarding = () => {
  const numscroll = Array.from({ length: 100 }, (_, i) => i + 1);
  const height = Array.from({ length: 100 }, (_, i) => i + 100);
  const [selectedAge, setSelectedAge] = useState(1); // Default to 1
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const flatlistref = useRef(null);

  // Handle next button click
  const handleNext = () => {
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
    setSelectedAge(height[selectedIndex]);

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
      <View style={{ flex:1 }}>
        <Swiper
          ref={swiperRef}
          onIndexChanged={(index) => setActiveIndex(index)}
          loop={false}
          autoplay={false}
        >
          {/* Slide 1 */}
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

              
              {/* You can place an image here */}
            </View>
          </View>
          <View style={{flex:1}}>
            <Gender/>

          </View>

          {/* Slide 2 (Age Picker) */}
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

              {/* Scrollable Age Picker */}
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
                  snapToInterval={ITEM_HEIGHT} // Height of each item (to align snapping)
                  decelerationRate="fast"
                  onScroll={(event) => {
                    const offsetY = event.nativeEvent.contentOffset.y;
                    setScrollY(offsetY); // Track scroll position
                    const selectedIndex = Math.min(
                      height.length - 1,
                      Math.max(0, Math.floor(offsetY / ITEM_HEIGHT))
                    );
                    setSelectedAge(numscroll[selectedIndex]); // Set selected age
                  }}
                  onMomentumScrollEnd={handleScrollEnd}
                  contentContainerStyle={{ paddingVertical: 100 }} // Padding to center the items
                />
              </View>

              {/* Highlight line (Top and Bottom) */}
              <View
                style={{
                  position: "absolute",
                  top: 120, // Adjust the position for your layout
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#00C6FF", // Color for highlight
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 90, // Adjust this position as well to match your layout
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#00C6FF", // Color for highlight
                }}
              />
            </View>
          </View>
          {/* {slide3} */}
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
                    fontSize: 20,
                    marginBottom: 30,
                  }}
                >
                  What is Your Height in cm?
                </Text>
              </View>

              {/* Scrollable Age Picker */}
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
                  data={height}
                  keyExtractor={(item) => item.toString()}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                  snapToAlignment="center"
                  snapToInterval={ITEM_HEIGHT} // Height of each item (to align snapping)
                  decelerationRate="fast"
                  onScroll={(event) => {
                    const offsetY = event.nativeEvent.contentOffset.y;
                    setScrollY(offsetY); // Track scroll position
                    const selectedIndex = Math.min(
                      height.length - 1,
                      Math.max(0, Math.floor(offsetY / ITEM_HEIGHT))
                    );

                    setSelectedAge(height[selectedIndex]); // Set selected age
                  }}
                  onMomentumScrollEnd={handleScrollEnd}
                  contentContainerStyle={{ paddingVertical: 100 }} // Padding to center the items
                />
              </View>

              {/* Highlight line (Top and Bottom) */}
              <View
                style={{
                  position: "absolute",
                  top: 100, // Adjust the position for your layout
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#00C6FF", // Color for highlight
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 100, // Adjust this position as well to match your layout
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#00C6FF", // Color for highlight
                }}
              />
            </View>
          </View>
          {/* {slide4} */}
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
          {/* {slide5} */}
          <View>
            <Goal />
          </View>
          {/* {slide6} */}
          <View>
            <Activity />
          </View>
          {/* {slide7} */}
          <View>
            <Sleep />
          </View>
          {/* {slide8} */}
          <View>
            <Numofdays />
          </View>
          {/* {slide9} */}
          <View>
            <Place />
          </View>
          {/* {slide10} */}
          {/* <View>
            <Preference />
          </View> */}
          {/* {slide11} */}
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
