import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';

const SearchScreen = ({ route }) => {
  const locationData = route.params;

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map locationData={locationData} />
      </View>
      <View style={tw`bg-red-100 h-1/2`}>

      </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
