import React, { useState, useEffect, useMemo } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ParkingListEntry from './ParkingListEntry.js'
import tw from 'tailwind-react-native-classnames';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native';
import SearchBar from './SearchBar';


const ParkingList = ({ parkingData }) => {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  return (
    <BottomSheet
    style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 13,
    }}
    initialSnapIndex={0}
    snapPoints={snapPoints}>
      <BottomSheetScrollView>
        <TouchableOpacity onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
          <Image
          style={styles.backButtonStyle}
          source={require('../assets/backarrow.png')} />
        </TouchableOpacity>
        {parkingData.map((data) => (
          <ParkingListEntry data={data} key={data.id} />
        ))}
      </BottomSheetScrollView>
    </BottomSheet>
  )
}

export default ParkingList

const styles = StyleSheet.create({
  backButtonStyle: {
    height: 20,
    width: 20,
    left: '3%',
    backgroundColor: 'transparent'
  }
})
