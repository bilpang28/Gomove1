import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export const MapsScreen = ({ navigation }) => {
  const onBackPress = () => {
    navigation.goBack();
  };

  const mapboxStaticImageUrl = `https://geology.com/world/map-of-greenland.jpg`;

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Image source={{ uri: mapboxStaticImageUrl }} style={{ flex: 1 }} />
      <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20 }} onPress={onBackPress}>
        <Text style={{ color: 'blue' }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
