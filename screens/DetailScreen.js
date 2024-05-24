// screens/DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { marker } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{marker.title}</Text>
      <Text style={styles.description}>{marker.description}</Text>
      <Text style={styles.city}>City: {marker.city}</Text>
          <Text style={styles.distance}>Distance: {marker.distance}</Text>
          <Text style={styles.nearbyPlaces}>
            Nearby Places: {marker.nearbyPlaces.join(', ')}
          </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
    
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black'
  },
  city: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black'
  },
  distance: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black'
  },
  nearbyPlaces: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black'
  },
});

export default DetailScreen;
