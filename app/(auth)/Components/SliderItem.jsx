import { Text, View, Image } from 'react-native';
import React from 'react';

const SliderItem = ({ item, index }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Display the image */}
      <Image
        source={item}
        style={{
          width: '190%',
          height: 250, 
          resizeMode: 'cover',
            borderRadius: 10,
        }}
      />
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        Slider Item {index + 1}
      </Text>
    </View>
  );
};

export default SliderItem;
