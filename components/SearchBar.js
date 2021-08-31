import React from 'react'
import { StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env"

const SearchBar = ({ navigation }) => {
  return (
      <GooglePlacesAutocomplete
          placeholder='Where are you going?'
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            container: {
              flex: 1,
            },
            textInputContainer: {
              flexDirection: 'row',
              borderWidth: 2,
              borderRadius: 15,
            },
            textInput: {
              backgroundColor: '#FFFFFF',
              height: 45,
              borderRadius: 15,
              paddingVertical: 6,
              paddingHorizontal: 20,
              fontSize: 15,
              flex: 1,
            },
            powered: {},
            listView: {},
            row: {
              backgroundColor: '#FFFFFF',
              padding: 13,
              height: 45,
              flexDirection: 'row',
            },
            separator: {
              height: 0.5,
              backgroundColor: 'transparent',
            },
          }}
          enablePoweredByContainer={false}
          disableScroll={false}
          minLength={3}
          onPress={(data, details = null) => {
            navigation.navigate('SearchScreen', details.geometry.location)
          }}
          fetchDetails={true}
          suppressDefaultStyles={false}
        />
  )
}

export default SearchBar

const styles = StyleSheet.create({
})
