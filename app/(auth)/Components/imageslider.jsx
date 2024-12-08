import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Image } from 'react-native';
import { sliderimages } from '../../../constants/index2'; // Import your images

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity set to 1

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade-out animation
      Animated.timing(fadeAnim, {
        toValue: 0, // Fade out
        duration: 500, // Duration of fade-out
        useNativeDriver: true,
      }).start(() => {
        // After fade-out is done, change the image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderimages.length);

        // Start fade-in animation for the new image
        Animated.timing(fadeAnim, {
          toValue: 1, // Fade in
          duration: 500, // Duration of fade-in
          useNativeDriver: true,
        }).start();
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.Image
        source={sliderimages[currentIndex]} // Display the current image
        style={{
          width: '80%', // Adjust based on your layout
          height: 220,
          borderRadius: 20,
          marginTop: 330, // Adjust based on your layout
          resizeMode: 'cover',
          opacity: fadeAnim, // Bind opacity to the animated value
        }}
      />
    </View>
  );
};

export default ImageSlider;
