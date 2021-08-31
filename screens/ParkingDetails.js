import React, { useEffect } from 'react'
import {Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native'

const ParkingDetails = ({ route }) => {
  const data = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{data.listing_name}</Text>
      <Image
      style={styles.image}
      source={{uri: `https://curbspacer.s3.us-west-1.amazonaws.com/photos/images/${data.photoid}/original/${data.image_file_name}?fbclid=IwAR3iZYuHoAUq9Q-iSCl4DNJgA1_mdK-ZPTig64aEY9g4es2ZoDDMxsgcdZ4`}} />
      <Text style={styles.heading}>
        Address
      </Text>
      <Text style={styles.details}>
        {data.address}
      </Text>
      <Text style={styles.heading}>
        Details
      </Text>
      <Text style={styles.details}>
        {data.summary}
      </Text>
    </SafeAreaView>
  )
}

export default ParkingDetails

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 15,
  },
  image: {
    flex: 1,
    maxHeight: 200,
    marginTop: 10,
    borderRadius: 20
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
  },
  details: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 5,
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10
  }
})

