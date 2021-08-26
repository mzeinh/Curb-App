import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import ParkingList from '../components/ParkingList';
import Animated from 'react-native-reanimated';
import axios from 'axios';

const { width, height } = Dimensions.get('screen')

const SearchScreen = ({ route }) => {
  const [parkingData, setParkingData] = useState([]);
  const locationData = route.params;

  useEffect(() => {
    axios.get('http://10.0.0.181:4000/parkings', {
      params: {
        locationData,
      }
    })
    .then((result) => {
      setParkingData(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <Map locationData={locationData} parkingData={parkingData} />
      </View>
      <ParkingList parkingData={parkingData} />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
