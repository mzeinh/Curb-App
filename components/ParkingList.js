import React, { useState, useEffect, useMemo } from 'react'
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
import ParkingListEntry from './ParkingListEntry.js'
import tw from 'tailwind-react-native-classnames';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'


const ParkingList = ({ parkingData }) => {
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
        {parkingData.map((data) => (
          <ParkingListEntry data={data} key={data.id} />
        ))}
      </BottomSheetScrollView>
    </BottomSheet>
  )
}

export default ParkingList

const styles = StyleSheet.create({
})
