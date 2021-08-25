import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, ScrollView, Image, View} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const [searchLocation, setSearchLocation] = useState({});
  const navigation = useNavigation();

  return (
   <SafeAreaView style={tw`bg-white h-full pl-5 pt-2`}>
      <Image style={styles.logo} source={require('../assets/Curb_Logo_B_02.jpg')} />
      <Text style={styles.homeText}>
        Finding parking right at your finger tips.
      </Text>
      <ScrollView keyboardShouldPersistTaps="handled" >
          <SearchBar
          searchLocation={searchLocation}
          setSearchLocation={setSearchLocation}
          navigation={navigation}
          />
      </ScrollView>
   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  homeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
  }
});
