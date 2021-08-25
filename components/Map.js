import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';

const Map = ({ locationData }) => {
  return (
      <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: locationData.lat,
          longitude: locationData.lng,
          latitudeDelta: 0.0600,
          longitudeDelta: 0.0600,
        }}
      />
  )
}

export default Map

const styles = StyleSheet.create({})
