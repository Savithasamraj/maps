import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button ,TouchableOpacity} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const MapScreen = ({ navigation }) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // state
  const [selectedMarker, setSelectedMarker] = useState(null);

  // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // }, []);
  const handlePresentModalPress = () => {
   
  }
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    bottomSheetModalRef.current?.present();
  };
  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marker 1"
            description="Description for Marker 1"
            onPress={() =>handleMarkerPress({
              
                id: 1,
                title: 'Location 1',
                description: 'Description for location 1',
                city: 'San Francisco',
                nearbyPlaces: ['Place A', 'Place B'],
                distance: '5 km',
                coordinate: { latitude: 37.78825, longitude: -122.4324 },
              }) }
          />
          <Marker
            coordinate={{ latitude: 37.77777, longitude: -122.4325 }}
            title="Marker 2"
            description="Description for Marker 2"
            onPress={() =>handleMarkerPress({
              id: 1,
              title: 'Location 2',
              description: 'Description for location 2',
              city: 'San Francisco city',
              nearbyPlaces: ['temples', 'orion mall'],
              distance: '5 km',
              coordinate: { latitude: 37.78825, longitude: -122.4324 },
            })}
          />
        </MapView>
       
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            {selectedMarker && (
              <>
                <Text style={styles.title}>Title:{selectedMarker.title}</Text>
                <Text tyle={styles.description}>Description:{selectedMarker.description}</Text>
                <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { marker: selectedMarker })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
              </>
            )}
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  map: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginTop:10,
   backgroundColor:'#00ffff'
  },
  buttonText: {
    padding:10,
  fontWeight: 'bold'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
    marginHorizontal: 8
    
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black',
    marginHorizontal: 8,
  },
});

export default MapScreen;


