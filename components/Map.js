import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const Map = ({ locationData, parkingData }) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: locationData.lat,
          longitude: locationData.lng,
          latitudeDelta: 0.0600,
          longitudeDelta: 0.0600,
        }}>
          <Marker
            coordinate={{
              latitude: locationData.lat,
              longitude: locationData.lng,
            }}>
              <Image source={require('../assets/destination.png')} style={{height: 100, width:100 }} />
          </Marker>
          {parkingData.length > 0 &&
            parkingData.map((data) => (
              <Marker
              key={data.id}
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude
              }}
              onPress={() => {
                navigation.navigate('ParkingDetails', data);
              }}
              >
                <Image source={require('../assets/curb_pin.png')} style={{height: 150, width:100 }} />
              </Marker>
            ))
          }
      </MapView >
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
})
