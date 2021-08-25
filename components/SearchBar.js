import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env"

const SearchBar = ({ navigation }) => {
  return (
    <SafeAreaView>
      <GooglePlacesAutocomplete
          placeholder='Search'
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          enablePoweredByContainer={false}
          disableScroll={false}
          minLength={3}
          onPress={(data, details = null) => {
            navigation.navigate('SearchScreen', details.geometry.location)
          }}
          fetchDetails={true}
        />
    </SafeAreaView>
  )
}

export default SearchBar

const styles = StyleSheet.create({})
