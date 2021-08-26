import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';

const Map = ({ locationData, parkingData }) => {
  return (
      <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: locationData.lat,
          longitude: locationData.lng,
          latitudeDelta: 0.0600,
          longitudeDelta: 0.0600,
        }}>
          {parkingData.length > 0 &&
            parkingData.map((data) => (
              <Marker
              key={data.id}
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude
              }}
              />
            ))
          }
      </MapView >
  )
}

export default Map

const styles = StyleSheet.create({})
