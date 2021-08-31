import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';


const ParkingListEntry = ({ data }) => {
  const navigation = useNavigation();
  const timeToWalk = Math.round((Number(data.distance.toFixed(2)) / 3) * 60);

  const scheme = 'maps:0,0?q=';
  const latLng = `${data.latitude},${data.longitude}`;
  const label = data.listing_name;
  const url = `${scheme}${label}@${latLng}`;

  // const vacancies = Math.floor(Math.random() * (23 - 1) + 1);

  return (
    <View>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: `https://curbspacer.s3.us-west-1.amazonaws.com/photos/images/${data.photoid}/original/${data.image_file_name}?fbclid=IwAR3iZYuHoAUq9Q-iSCl4DNJgA1_mdK-ZPTig64aEY9g4es2ZoDDMxsgcdZ4` }} />
        <Card.Content>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Title
              style={{marginTop: 10, flexWrap: 'wrap', flexShrink: 1}}>
                {data.listing_name}
              </Title>
              <Title
              style={{marginTop:10}}>
                ${data.price}/hr
              </Title>
          </View>
          <Text
            style={{fontWeight: 'bold'}}>
              {data.address}
          </Text>
          <Text
            style={{marginTop: 5}}>
              {timeToWalk} minute(s) walk from destination.
          </Text>
          <Text style={{marginTop: 5}}>
            <Text style={{color: 'green', fontWeight: 'bold'}}>
              {data.vacancies}
            </Text> vacant parking stalls.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => {
            navigation.navigate('ParkingDetails', data);
          }}>
            Details
          </Button>
          <Button onPress={() => {
            Linking.openURL(url);
          }}>
            Directions
          </Button>
        </Card.Actions>
    </Card>

    </View>
  );
}

export default ParkingListEntry

const styles = StyleSheet.create({
  card: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 10,
  }
})
