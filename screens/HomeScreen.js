import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, ScrollView, Image, View, LogBox, KeyboardAvoidingView} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const [searchLocation, setSearchLocation] = useState({});
  const navigation = useNavigation();

  LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
          <Image style={styles.logo} source={require('../assets/Curb_Logo_B_02.jpg')} />
          <Text style={styles.homeText}>
            Finding parking right at your finger tips.
          </Text>
          <ScrollView keyboardShouldPersistTaps="handled" style={{paddingTop: 30}}>
            <SearchBar
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
            navigation={navigation}/>
          </ScrollView>
          <Image
            source={require('../assets/sf_30.jpg')}
            style={{
              marginTop: 20,
              width: '100%',
              height: 250,
              borderRadius: 20,
            }}
          />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  subContainer: {
    paddingLeft: 15,
    paddingRight: 15
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  homeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
});
