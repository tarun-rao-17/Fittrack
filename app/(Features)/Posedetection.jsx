import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Camera } from 'lucide-react-native';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PoseDetectionScreen = () => {
  const [videoUri, setVideoUri] = useState(null);

  const handleVideoUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Needed',
        'Sorry, we need camera roll permissions to make this work!'
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
    }
  };

  const handleCameraCapture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Needed',
        'Sorry, we need camera permissions to record a video!'
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F4F4' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 20 }}>
        {/* Header */}
        <View style={{ marginTop: 20, marginBottom: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: '#333', marginBottom: 10 }}>
            Pose Detection
          </Text>
          <Text style={{ fontSize: 16, color: '#666', textAlign: 'center' }}>
            Analyze Your Movement Precision
          </Text>
        </View>

        {/* Feature Explanation */}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            padding: 20,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 15,
              color: '#333',
              textAlign: 'center',
            }}
          >
            How It Works
          </Text>
          {[...Array(3)].map((_, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#4A90E2',
                  marginRight: 15,
                  width: 30,
                }}
              >
                {index + 1}
              </Text>
              <Text style={{ fontSize: 15, color: '#555', flex: 1 }}>
                {[
                  'Record a clear video of your exercise or movement',
                  'Our AI analyzes your pose, tracking body landmarks precisely',
                  'Receive detailed feedback on form, alignment, and performance',
                ][index]}
              </Text>
            </View>
          ))}
        </View>

        {/* Video Upload Area */}
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#4A90E2',
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}
              onPress={handleVideoUpload}
            >
              <Camera color="#FFFFFF" size={24} />
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600', marginLeft: 8 }}>
                Upload Video
              </Text>
            </TouchableOpacity>
            <View>
              
            </View>


          </View>

          {videoUri && (
            <View
              style={{
                width: '100%',
                height: 250,
                borderRadius: 15,
                overflow: 'hidden',
                marginTop: 20,
                position: 'relative',
              }}
            >
              <Video
                source={{ uri: videoUri }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
                shouldPlay
                isLooping
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  backgroundColor: 'rgba(255,0,0,0.7)',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 8,
                }}
                onPress={() => setVideoUri(null)}
              >
                <Text style={{ color: 'white', fontWeight: '600' }}>Remove Video</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Additional Information */}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 15,
              color: '#333',
              textAlign: 'center',
            }}
          >
            Tips for Best Results
          </Text>
          {['Ensure good lighting', 'Wear form-fitting clothing', 'Frame your entire body in the shot'].map(
            (tip, idx) => (
              <Text key={idx} style={{ fontSize: 15, color: '#555', marginBottom: 5 }}>
                • {tip}
              </Text>
            )
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PoseDetectionScreen;
